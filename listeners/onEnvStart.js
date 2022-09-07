'use strict'

const apiService = require("../services/api");


module.exports = async (props, event, api) => {
    await apiService.createDatastore(api, "counter").catch((e => { }));
    await apiService.createData(api, {
        datastore: "counter",
        count: 0
    });

    return {};
}