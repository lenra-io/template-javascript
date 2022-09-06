'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, counterId) {
        return axios.get(`${api.url}/app/datastores/Counter/data/${counterId}`, options(api));
    },
    put(api, counter) {
        return axios.put(`${api.url}/app/datastores/Counter/data/${counter._id}`, counter, options(api));
    },
    new(api) {
        return axios.post(`${api.url}/app/datastores/Counter/data`, { "value": 0 }, options(api));
    },
    delete(api, counterId) {
        return axios.delete(`${api.url}/app/datastores/Counter/data/${counterId}`, options(api));
    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastores`, { "name": "Counter" }, options(api));
    }
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
