'use strict'

import { Counter } from "../classes/Counter.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} _event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, _event, api) {
    let token = await axios.post(`${this.api.url}/app/transaction`, { headers: { Authorization: `Bearer ${api.token}` } })
        .then(resp => resp.data);
    let counter = await api.data.getDoc(Counter, props.id);
    counter.count += 1;
    await axios.put(`${this.api.url}/app/colls/counter/docs/${doc._id}`, doc, { headers: { Authorization: `Bearer ${token}` } });
    await axios.put(`${this.api.url}/app/transacation/abort`, { headers: { Authorization: `Bearer ${token}` } });
    return {};
}