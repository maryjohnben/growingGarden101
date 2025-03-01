import requests
from flask import Flask, jsonify, request
from waitress import serve #similar to Express.js in node
from config import Config
from pymongo import MongoClient

app = Flask(__name__) #makes a flask app
app.config.from_object(Config)

#now connect to mongoDB
client = MongoClient(app.config['MONGO_URI'])
db = client["plantdb"] #client.plantdb also allowed
collection = db["plants"]

trefle_url = app.config['TREFLE_API_PLANT']

@app.route('/') # home page
def home():
    return jsonify({"message":"Backend is up!"})

@app.route('/search', methods=['GET'])

def get_plant(): #search using query
    query = request.args.get('query')
    print(f"Received query: {query}")

    if not query:
        return jsonify({"message":"No query provided"}), 400

    regex_query = {"$regex": query, "$options": "i"} # to ignore case
    output = list(collection.find(
        {"$or": [{"Common Name": regex_query},
        {"Scientific Name": regex_query}]
         }, {"_id": 0} #result to exclude id
    ))

    if output:
        return jsonify(output)
##################FIX ME#####################
    # if plant not found go to trefle api
    # trefle_response = requests.get(f"{trefle_url}{regex_query}")
    #
    # if trefle_response.status_code == 200:
    #     print(f"Received data: {trefle_response.status_code}")
    #     trefle_data = trefle_response.json() #if sucessful return data
    #
    #     if "data" in trefle_data and len(trefle_data["data"]) > 0:
    #         trefle_plant = trefle_data["data"]
    #
    #         results = []
    #         for each in trefle_plant: # get only the fields that is needed
    #             results.append(
    #                 {
    #                     "common_name": each.get("common_name", "Unknown"),
    #                     "scientific_name": each.get("scientific_name", "Unknown"),
    #                     "watering": each.get("watering", "Unknown"),
    #                     "soil_ph": each.get("soil_ph", "Unknown"),
    #                     "sun": each.get("sun", "Unknown")
    #                 }
    #         )
    #
    #         return jsonify(results)
    return jsonify({"message": "No matches found"}), 404


if __name__ == '__main__':
    # production
    if app.config['FLASK_ENV'] == 'production':
        serve(app, host='0.0.0.0', port=8080)
    else:
        # development
        app.run(debug=True)




