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
        let cron = crons[0];
        console.log("UPDATE CRON");
        console.log(cron);
        return axios.put(`${api.url}/app/crons/${cron.name}`, {}, options(api));
    },
    async deleteCron(api) {
        let crons = (await this.getCron(api)).data;
        console.log(`crons ${crons}`);
        // TODO: I don't know why this takes the first character of the JSON instead of getting the first element in the JSON array !!!!!!
        console.log(`cron ${crons[0]}`);
        let cron = crons[0];
        console.log("DELETE CRON");
        console.log(`CRON NAME ${cron.name}`);
        console.log(cron);
        return axios.get(`${api.url}/app/crons/${cron.name}`, options(api));
    }
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
