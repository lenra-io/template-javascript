'use strict'

module.exports = (data, props) => {
  return {
    type: "flex",
    direction: "vertical",
    children: [
      {
        type: "image",
        src: "logo-vertical.png"
      },
      {
        type: "text",
        value: "This is the Hello World base app using the data system."
      },
      {
        type: "widget",
        name: "userData",
        query: {
          "$find": {
            "_datastore": "_users",
            "_id": "@me"
          }
        }
      },
      {
        type: "widget",
        name: "counters",
        query: {
          "$find": {
            "_datastore": "Counter"
          }
        }
      }
    ]
  }
}

