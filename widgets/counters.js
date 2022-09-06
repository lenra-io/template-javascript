'use strict'

module.exports = (counters, props) => {
    return {
        type: "flex",
        children: [
            {
                type: "button",
                text: "New Counter",
                onPressed: {
                    action: "newCounter"
                }
            },
            {
                type: "text",
                value: "Shared counters : "
            },
            {
                type: "flex",
                direction: "vertical",
                children: counters.sort((c1, c2) => c1._id - c2._id).map((counter) => {
                    return {
                        type: "widget",
                        name: "counter",
                        props: counter
                    }
                })
            }
        ]
    }
}

