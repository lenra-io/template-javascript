'use strict'

const apiService = require("../services/api");


module.exports = async (props, event, api) => {
    let wh = await apiService.deleteCron(api);
    console.log(wh.data);
}