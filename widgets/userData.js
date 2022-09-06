'use strict'

module.exports = (data, props) => {
    var userData = data[0];
    console.log(userData)
    return {
        type: "text",
        value: JSON.stringify(userData)
    }
}

