'use strict'

const apiService = require("../services/api");


module.exports = async (props, event, api) => {
    let wh2 = await apiService.getCron(api);
    console.log(wh2.data);
}