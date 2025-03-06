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

CORS(app, resources={r"/*": {"origins": allowed_origins}})  # Apply dynamic CORS

app.config.from_object(Config)

# now connect to mongoDB
client = MongoClient(Config.MONGO_URI)
db = client["plantdb"]  # client.plantdb also allowed
collection = db["plants"]
openai.api_key = Config.OPENAI_PROJECT
client = genai.Client(api_key=Config.GOOGLE_GEMINI_TOKEN)

trefle_url = app.config['TREFLE_API_PLANT']


@app.route('/')  # home page
def home():
    return jsonify({"message": "Backend is up!"})


@app.route('/search', methods=['GET'])
def get_plant():  # search using query
    query = request.args.get('query')
    print(f"Received query: {query}")

    if not query:
        return jsonify({"message": "No query provided"}), 400

    regex_query = {"$regex": query, "$options": "i"}  # to ignore case
    output = list(collection.find(
        {"$or": [{"Common Name": regex_query},
                 {"Scientific Name": regex_query}]
         }, {"_id": 0}  # result to exclude id
    ))

    if output:
        return jsonify(output)
    ##################FIX ME#####################
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
    # if data no found in MongoDB ask openAI

    prompt = f"""
        Provide plant care information for "{query}" in a valid JSON format.
        [
          {{
            "Common Name": "Example Plant",
            "Scientific Name": "Example scientific name",
            "Watering": "Watering instructions",
            "Soil ph": 6.0,
            "Sun": "Sunlight instructions"
          }}
        ]

        Ensure the output is valid JSON and contains only the above mentioned fields with no additional text or explanations.
        """
    ############### OPENAI API no longer has a free tier ##########################
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
    print("Direct from Gemini", response.text)
    # Ensure response is properly parsed as JSON
    # Remove potential markdown formatting (` ```json ` and ` ``` `)
    cleaned_response = response.text.strip().replace("```json", "").replace("```", "").strip()
    try:
        plant_info = json.loads(cleaned_response)
    except json.JSONDecodeError:
        plant_info = {"error": "Failed to parse AI response as JSON"}
    if plant_info:
        return jsonify(plant_info), 200

    return jsonify({"message": "No matches found"}), 404


if __name__ == '__main__':
    # production
    if app.config['FLASK_ENV'] == 'production':
        serve(app, host='0.0.0.0', port=8080)
    else:
        # development
        app.run(debug=True)