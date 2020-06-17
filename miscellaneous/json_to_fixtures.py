import json


def json_to_fixture(filepath, modelname):
    with open(filepath) as f:
        data = json.load(f)

    model_str = "heroes." + modelname
    fixtures = []
    for obj in data:
        dicti = {}
        fields = {}
        dicti["model"] = model_str
        bio = data[obj]
        dicti["pk"] = bio["id"]

        for field in bio:
            if bio[field] is list:
                bio[field] = " - ".join(bio[field])

            fields[field] = bio[field]
        dicti["fields"] = fields
        fixtures.append(dicti)

    json_str = json.dumps(fixtures)
    fixture_name = modelname + ".json"
    file = open(fixture_name, "w")
    file.write(json_str)
    file.close()


def main():
    filename = input()
    filepath = "./" + filename
    modelname = input()
    json_to_fixture(filepath, modelname)


if __name__ == '__main__':
    main()
