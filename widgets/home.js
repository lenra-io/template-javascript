'use strict'

module.exports = (data, counter) => {
    return {
        "type": "flex",
        "direction": "vertical",
        "spacing": 4,
        "mainAxisAlignment": "spaceEvenly",
        "crossAxisAlignment": "center",
        "children": [
            {
                "type": "widget",
                "name": "counter",
                "query": {
                    "$find": {
                        "_datastore": "_users",
                        "_id": "@me"
                    }
                },
                "props": { text: "My personnal counter" }
            },
            {
                "type": "widget",
                "name": "counter",
                "query": {
                    "$find": {
                        "_datastore": "counter",
                    }
                },
                "props": { text: "The common counter" }
            }
        ]
    }
}

