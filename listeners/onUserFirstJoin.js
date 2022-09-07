'use strict'

const apiService = require('../services/api');


module.exports = async (props, event, api) => {
    let users = await apiService.executeQuery(api, {
        "$find": {
            "_datastore": "_users",
            "_id": "@me"
        }
    });

    if (users.length > 0) {
        let user = users[0];
        if (user.count == null || user.count == undefined) {
            user.count = 0;
            user.datastore = "_users";
            apiService.updateData(api, user)
        }
    }

    return {};
}