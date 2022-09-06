'use strict'

const counterService = require("../services/counterService");

module.exports = (counter, event, api) => {
    return counterService.delete(api, counter._id)
}