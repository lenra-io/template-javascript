'use strict'

import { Counter } from "../classes/Counter.js";

/**
 * 
 * @param {import("@lenra/app-server").props} _props 
 * @param {import("@lenra/app-server").event} _event 
 * @param {import("@lenra/app-server").Api} api 
 */
export async function onEnvStart(_props, _event, api) {
    let counters = await api.executeQuery(Counter, { user: "global" })
    if (counters.length == 0) {
        await api.createDoc(new Counter("global", 0));
    }
}

export async function onUserFirstJoin(_props, _event, api) {
    let counters = await api.executeQuery(Counter, { user: "@me" })
    if (counters.length == 0) {
        await api.createDoc(new Counter("@me", 0))
    }
}

export async function onSessionStart(_props, _event, _api) {

}