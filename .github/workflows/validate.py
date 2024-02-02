import json

schema = json.load(open("schema.json"))
instance = json.load(open("resume.json"))
result = {a: b for a, b in instance.items() if a in schema["properties"]}
json.dump(result, open("resume.json", "w"), indent=2)
