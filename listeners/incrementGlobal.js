'use strict'

const apiService = require("../services/api");

module.exports = async (props, event, api) => {

    let res = await apiService.executeQuery(api, "counter", { "user": "global" });
    let counter = res.data[0];
    counter.count += 1;
    await apiService.updateDoc(api, "counter", counter);
    return {};
}