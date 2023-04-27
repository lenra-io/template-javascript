'use strict'

module.exports = (_data, _props) => {
    return {
        type: "button",
        text: "NEW PAGE",
        onPressed: {
            action: "@lenra:navTo",
            props: {
                path: "/",
                test: "@id"
            }
        }
    }
}

