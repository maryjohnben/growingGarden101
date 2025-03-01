import csv
import json

csv_file = "plants.csv"
json_file = "plants.json"

# Read CSV and convert to JSON
with open(csv_file, encoding="utf-8-sig") as file: #sig to remove \ufeff
    csv_reader = csv.DictReader(file)
    data = [row for row in csv_reader]

with open(json_file, "w", encoding="utf-8") as file:
    json.dump(data, file, indent=4)

print("CSV converted to JSON successfully!")