'use strict'

const apiService = require("../services/api");


module.exports = async (props, event, api) => {
    let wh = await apiService.createCron(api);
    console.log(wh.data);
}