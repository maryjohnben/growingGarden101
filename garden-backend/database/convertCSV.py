import csv
import json
from pymongo import MongoClient

#convert to json and insert to database

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")  # Update with your MongoDB URI
db = client["plantdb"]  # Replace with your database name
collection = db["plantsAdditionalData"]  # Replace with your collection name

# csv_file = "plants.csv"
csv_file = "plantsAdditionalData.csv"
# json_file = "plants.json"
json_file = "plantsAdditionalData.json"

# Read CSV and convert to JSON
with open(csv_file, encoding="utf-8-sig") as file: #sig to remove \ufeff
    csv_reader = csv.DictReader(file)
    data = [row for row in csv_reader]

with open(json_file, "w", encoding="utf-8") as file:
    json.dump(data, file, indent=4)

print("CSV converted to JSON successfully!")

# Load JSON file
with open("plantsAdditionalData.json") as file:
    data = json.load(file)

    # Insert into MongoDB
if isinstance(data, list):
    collection.insert_many(data)  # If JSON is a list of objects
else:
    collection.insert_one(data)  # If JSON is a single object

print("Data inserted successfully!")