'use strict'

const { Flex, Text, Button } = require("@lenra/components")

module.exports = ([counter], { text }) => {
  return Flex(
    Text(`${text}: ${counter.count}`),
    Button("+")
      .onPressed("increment", {
        "id": counter._id,
        "datastore": counter.datastore
      })
  )
    .spacing(16)
    .mainAxisAlignment("spaceEvenly")
    .crossAxisAlignment("center")
}

