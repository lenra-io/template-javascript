'use strict'

const apiService = require("../services/api");

module.exports = async (props, event, api) => {
    console.log("INCREMENT");
    console.log(props);
    console.log(event);
    console.log(api);

    let counter = await apiService.getData(api, props.datastore, props.id).data;
    console.log("COUNTER");
    console.log(counter);
    counter.count += 1;
    await apiService.updateData(api, counter);
    return {};
}