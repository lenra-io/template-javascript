'use strict'

const { default: axios } = require("axios");

module.exports = {
    getData(api, datastore, id) {
        return axios.get(`${api.url}/app/datastores/${datastore}/data/${id}`, options(api));
    },
    createData(api, data) {
        return axios.post(`${api.url}/app/datastores/${data.datastore}/data`, data, options(api));
    },
    updateData(api, data) {
        return axios.put(`${api.url}/app/datastores/${data.datastore}/data/${data._id}`, data, options(api));
    },
    deleteData(api, datastore, data) {
        return axios.delete(`${api.url}/app/datastores/${datastore}/data/${data._id}`, options(api));
    },
    createDatastore(api, datastore) {
        return axios.post(`${api.url}/app/datastores`, { "name": datastore }, options(api));
    },
    executeQuery(api, query) {
        return axios.post(`${api.url}/app/query`, query, options(api));
    }
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
