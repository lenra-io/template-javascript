'use strict'

const { default: axios } = require("axios");

module.exports = {
    getDoc(api, coll, id) {
        return axios.get(`${api.url}/app/colls/${coll}/docs/${id}`, options(api));
    },
    createDoc(api, coll, doc) {
        return axios.post(`${api.url}/app/colls/${coll}/docs`, doc, options(api));
    },
    updateDoc(api, coll, doc) {
        return axios.put(`${api.url}/app/colls/${coll}/docs/${doc._id}`, doc, options(api));
    },
    deleteDoc(api, coll, doc) {
        return axios.delete(`${api.url}/app/colls/${coll}/docs/${doc._id}`, options(api));
    },
    executeQuery(api, coll, query) {
        return axios.post(`${api.url}/app/colls/${coll}/docs/find`, query, options(api));
    },
    createCron(api) {
        return axios.post(`${api.url}/app/crons`, { listener_name: "incrementGlobal", schedule: "* * * * *" }, options(api));
    },
    getCron(api) {
        return axios.get(`${api.url}/app/crons`, options(api));
    },
    async updateCron(api) {
        let crons = (await this.getCron(api)).data;
        return axios.put(`${api.url}/app/crons`, { name: crons[0].name, listener_name: "increment" }, {}, options(api));
    },
    async deleteCron(api) {
        let crons = (await this.getCron(api)).data;
        console.log(crons);
        return axios.get(`${api.url}/app/crons`, { name: crons[0].name }, options(api));
    }
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
