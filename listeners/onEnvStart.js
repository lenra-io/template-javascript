'use strict'

const apiService = require("../services/api");


module.exports = async (props, event, api) => {
    let res = await apiService.executeQuery(api, "counter", {
        "user": "global"
    })

    let counters = res.data;
    if (counters.length == 0) {
        await apiService.createDoc(api, "counter", {
            "count": 0,
            "user": "global"
        });
    }

    // let wh = await apiService.createCron(api);
    // console.log(wh.data);

    // let wh2 = await apiService.getCron(api);
    // console.log(wh2.data);
}