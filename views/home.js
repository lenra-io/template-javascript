'use strict'

const { Flex, View } = require("@lenra/components")

module.exports = (_data, _props) => {
    return Flex(
        View("counter")
            .data("counter", {
                "user": "@me"
            })
            .props({ text: "My personnal counter" }),
        View("counter")
            .data("counter", {
                "user": "global"
            })
            .props({ text: "The common counter" }),
    )
        .direction("vertical")
        .spacing(16)
        .mainAxisAlignment("spaceEvenly")
        .crossAxisAlignment("center")
}

