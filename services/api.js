'use strict'

const { default: axios } = require("axios");

module.exports = {
    getData(api, datastore, id) {
        console.log(api);
        console.log(datastore);
        console.log(id);
        return axios.get(`${api.url}/app/datastores/${datastore}/data/${id}`, options(api));
    },
    createData(api, data) {
        console.log(api);
        console.log(data);
        return axios.post(`${api.url}/app/datastores/${data.datastore}/data`, data, options(api));
    },
    updateData(api, data) {
        console.log(api);
        console.log(data);
        return axios.put(`${api.url}/app/datastores/${data.datastore}/data/${data._id}`, data, options(api));
    },
    deleteData(api, datastore, data) {
        console.log(api);
        console.log(datastore);
        console.log(data);
        return axios.delete(`${api.url}/app/datastores/${datastore}/data/${data._id}`, options(api));
    },
    createDatastore(api, datastore) {
        console.log(api);
        console.log(datastore);
        return axios.post(`${api.url}/app/datastores`, { "name": datastore }, options(api));
    },
    executeQuery(api, query) {
        console.log(api);
        console.log(query);
        return axios.post(`${api.url}/app/query`, query, options(api));
    }
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
