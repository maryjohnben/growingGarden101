import openai
import requests
import os
import base64
import os
import json
from google import genai
from google.genai import types
from flask import Flask, jsonify, request
from flask_cors import CORS
from waitress import serve  # similar to Express.js in node
from config import Config
from pymongo import MongoClient

app = Flask(__name__)  # makes a flask app

# Convert comma-separated CORS origins into a list
allowed_origins = Config.CORS_ORIGINS.split(",")
# print("allowed", allowed_origins)

CORS(app, resources={r"/*": {"origins": allowed_origins}})  # Apply dynamic CORS

app.config.from_object(Config)

# now connect to mongoDB
client = MongoClient(Config.MONGO_URI)
db = client["plantdb"]  # client.plantdb also allowed
collection = db["plantsAdditionalData"]
openai.api_key = Config.OPENAI_PROJECT
client = genai.Client(api_key=Config.GOOGLE_GEMINI_TOKEN)

trefle_url = app.config['TREFLE_API_PLANT']
openWeatherAPI = app.config['OPENWEATHER_API']


@app.route('/')  # home page
def home():
    return jsonify({"message": "Backend is up!"})


@app.route('/search', methods=['GET'])
def get_plant():
    # search using query
    query = request.args.get('query')
    print(f"Received query: {query}")

    if not query:
        return jsonify({"message": "No query provided"}), 400

    regex_query = {"$regex": query, "$options": "i"}  # to ignore case
    #find from database using either common name or scientific name
    output = list(collection.find(
        {"$or": [{"Common Name": regex_query},
                 {"Scientific Name": regex_query}]
         }, {"_id": 0}  # result to exclude id usually this not needed from db
    ))

    if output:
        return jsonify(output)
    ########################NOT USED#################################
    ## if plant not found go to trefle api
    # trefle_response = requests.get(f"{trefle_url}{regex_query}")
    #
    # if trefle_response.status_code == 200:
    #     print(f"Received data: {trefle_response.status_code}")
    #     trefle_data = trefle_response.json() #if sucessful return data

    # if "data" in trefle_data and len(trefle_data["data"]) > 0:
    #     trefle_plant = trefle_data["data"]
    #
    #     results = []
    #     for each in trefle_plant: # get only the fields that is needed
    #         results.append(
    #             {
    #                 "common_name": each.get("common_name", "Unknown"),
    #                 "scientific_name": each.get("scientific_name", "Unknown"),
    #                 # "watering": each.get("watering", "Unknown"),
    #                 # "soil_ph": each.get("soil_ph", "Unknown"),
    #                 # "sun": each.get("sun", "Unknown")
    #             }
    #     )

    prompt = f"""
        Provide plant care information for "{query}" in a valid JSON format.
        [
          {{
            "Common Name": "Example Plant",
            "Scientific Name": "Example scientific name",
            "Watering": "Watering instructions",
            "Soil ph": 6.0,
            "Sun": "Sunlight instructions"
            "Soil Type": "Type of soil that is best for the plant",
            "Time to water": "Best time of the day to water the plant",
            "Time to plant": "Best month of the year to start growing the plant",
          }}
        ]

        Ensure the output is valid JSON and contains only the above mentioned fields with no additional text or explanations.
        """
    # if data not found in MongoDB ask AI

    #################### OPENAI API no longer has a free tier ##########################
    # ai_response = openai.chat.completions.create(
    #     model="gpt-4o-mini",
    #     messages=[
    #         {"role": "developer", "content": "You are a helpful assistant."},
    #         {"role": "user", "content": prompt}
    #     ]
    #     )
    # ai_text = ai_response.choices[0].message
    # return jsonify({"ai_message": ai_text}), 200

    ###################### GOOGLE GEMINI AI ########################

    response = client.models.generate_content(
        model="gemini-2.0-flash", contents=prompt
    )
    # print("Direct from Gemini", response.text)
    # Ensure response is properly parsed as JSON
    # Remove potential markdown formatting (` ```json ` and ` ``` `)
    cleaned_response = response.text.strip().replace("```json", "").replace("```", "").strip()
    try:
        plant_info = json.loads(cleaned_response)
    except json.JSONDecodeError:
        plant_info = {"error": "Failed to parse AI response as JSON"}
    if plant_info:
        return jsonify(plant_info), 200

    # if database and AI fails this message will be displayed
    return jsonify({"message": "No matches found"}), 404

############################## get AI based plant care info using Gemini AI ################################

@app.route('/assistance', methods=['POST'])

def get_weather_and_ai_instructions():  # search using query
    try:
        incoming = request.json # data send from front is received
        selectedPlant = incoming.get("selectedPlant")
        # print(selectedPlant)
        latitude = incoming.get("latitude")
        longitude = incoming.get("longitude")

        #now get weather data from openWeather API
        weather_url = f'https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={openWeatherAPI}&units=imperial'
        response = requests.get(weather_url)
        if response.status_code == 200:
            weather_info = response.json()
            print("Weather returned:", weather_info)
        else:
            raise Exception(f"Failed to get weather info from {weather_url}")

        # now send weather to gemini and get plant care instructions
        prompt = f"""
                Provide detailed plant care information for "{selectedPlant["Scientific Name"]}" using the following: {weather_info}.
                    Consider factors like temperature, humidity, wind speed, and other relevant weather conditions.
        Ensure the output is valid JSON and contains only the fields: Common Name, Scientific Name, Soil Type, Soil pH, Sun, Time to plant, Time to water, Watering, Fertilizing, Current Weather, Weather based recommendations.
                """
        response_ai = client.models.generate_content(
            model="gemini-2.0-flash", contents=prompt
        )
        # Ensure response is properly parsed as JSON
        # Remove potential markdown formatting (` ```json ` and ` ``` `)
        cleaned_response_ai = response_ai.text.strip().replace("```json", "").replace("```", "").strip()
        print("Direct from Gemini", response_ai)
        try:
            plant_care_info_ai = json.loads(cleaned_response_ai)
        except json.JSONDecodeError:
            plant_care_info_ai = {"error": "Failed to parse AI response as JSON"}
        if plant_care_info_ai:
            print("After changes",plant_care_info_ai)
            return jsonify(plant_care_info_ai), 200

            # if AI fails to return anything this message will be displayed
        return jsonify({"message": "AI failed to return plant care assistance. Sorry."}), 404


    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # production
    if app.config['FLASK_ENV'] == 'production':
        serve(app, host='0.0.0.0', port=8080)
    else:
        # development
        app.run(host='0.0.0.0', port=5000)
        app.run(debug=True)