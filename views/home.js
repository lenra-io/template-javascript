'use strict'

const { Flex, View, Button } = require("@lenra/components")

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

        {
            type: "button",
            text: "@lenra",
            onPressed: {
                action: "@lenra:navTo",
                props: { path: "/newPage/1" }
            }
        },
        {
            type: "text",
            value: "@me"
        }
    )
        .direction("vertical")
        .spacing(16)
        .mainAxisAlignment("spaceEvenly")
        .crossAxisAlignment("center")
}

