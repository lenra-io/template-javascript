'use strict'

module.exports = (data, counter) => {
    console.log("COUNTER");
    console.log(data);
    console.log(counter);

    return {
        "type": "flex",
        "spacing": 2,
        "mainAxisAlignment": "spaceEvenly",
        "crossAxisAlignment": "center",
        "children": [
          {
            "type": "text",
            "value": `${counter.text}: ${data.counter}`
          },
          {
            "type": "button",
            "text": "+",
            "onPressed": {
                "action": "increment",
                "props": {
                    "id": data.id,
                    "datastore": data.datastore
                }
            }
          }
        ]
      }
}

