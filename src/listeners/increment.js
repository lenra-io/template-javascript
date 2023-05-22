'use strict'
import axios from "axios";
import { Counter } from "../classes/Counter.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} _event 
 * @param {import("@lenra/app-server").Api} api
 * @returns 
 */
export default async function (props, _event, api) {
    let token = await axios.post(`${api.url}/app/transaction`, { headers: { Authorization: `Bearer ${api.token}` } })
        .then(resp => resp.data);
    let counter = await api.data.getDoc(Counter, props.id);
    counter.count += 1;
    await axios.put(`${api.url}/app/colls/counter/docs/${doc._id}`, doc, { headers: { Authorization: `Bearer ${token}` } });
    await axios.put(`${api.url}/app/transacation/abort`, { headers: { Authorization: `Bearer ${token}` } });
    return {};
}