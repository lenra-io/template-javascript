'use strict'

const counterService = require("../services/counterService");


module.exports = (props, event, api) => {
    return counterService.createDatastore(api).catch((e => { }));
}