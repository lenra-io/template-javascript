'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      main: require('./widgets/main'),
      userData: require('./widgets/userData'),
      counters: require('./widgets/counters'),
      counter: require('./widgets/counter')
    },
    listeners: {
      increment: require('./listeners/increment'),
      decrement: require('./listeners/decrement'),
      newCounter: require("./listeners/newCounter"),
      deleteCounter: require("./listeners/deleteCounter"),
      onEnvStart: require('./listeners/onEnvStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin')
    },
    rootWidget: 'main'
  }
}