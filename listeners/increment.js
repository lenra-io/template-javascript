'use strict'

const apiService = require("../services/api");

module.exports = async (props, event, api) => {
    let counter = (await apiService.getData(api, props.datastore, props.id)).data.data;
    counter.count += 1;
    await apiService.updateData(api, counter);
    return {};
}