'use strict'

module.exports = (data, counter) => {
    return {
        type: "flex",
        children: [
            {
                type: "button",
                text: "-",
                onPressed: {
                    action: "decrement",
                    props: counter
                }
            },
            {
                type: "text",
                value: counter.value.toString()
            },
            {
                type: "button",
                text: "+",
                onPressed: {
                    action: "increment",
                    props: counter
                }
            },
            {
                type: "button",
                text: "DEL",
                onPressed: {
                    action: "deleteCounter",
                    props: counter
                }
            },
        ]
    }
}

