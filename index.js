'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      main: require('./widgets/main'),
      userData: require('./widgets/userData'),
      counter: require('./widgets/counter'),
      home: require('./widgets/home'),
      menu: require('./widgets/menu'),
    },
    listeners: {
      increment: require('./listeners/increment'),
      onEnvStart: require('./listeners/onEnvStart'),
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin')
    },
    rootWidget: 'main'
  }
}