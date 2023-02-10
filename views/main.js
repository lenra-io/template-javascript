'use strict'

const { Flex, View } = require("@lenra/components")

module.exports = (_data, _props) => {
  return Flex(
    View("menu"),
    View("home")
  )
    .direction("vertical")
    .scroll(true)
    .spacing(4)
    .crossAxisAlignment("center")
}

