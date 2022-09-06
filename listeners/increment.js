'use strict'

const counterService = require("../services/counterService");

module.exports = (counter, event, api) => {
    counter.value += 1;
    return counterService.put(api, counter);
}