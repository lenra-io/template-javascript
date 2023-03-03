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
        Button("CREATE CRON").onPressed("createCron"),
        Button("GET ALL CRONS").onPressed("getCrons"),
        Button("UPDATE CRON").onPressed("updateCron"),
        Button("DELETE CRON").onPressed("deleteCron"),

    )
        .direction("vertical")
        .spacing(16)
        .mainAxisAlignment("spaceEvenly")
        .crossAxisAlignment("center")
}

