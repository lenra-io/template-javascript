'use strict'
// Views

module.exports = async () => {
  return {
    views: {
      main: require('./views/main'),
      counter: require('./views/counter'),
      home: require('./views/home'),
      menu: require('./views/menu'),
    },
    listeners: {
      increment: require('./listeners/increment'),
      incrementGlobal: require('./listeners/incrementGlobal'),
      onEnvStart: require('./listeners/onEnvStart'),
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      createCron: require('./listeners/createCron'),
      getCrons: require('./listeners/getCrons'),
      updateCron: require('./listeners/updateCron'),
      deleteCron: require('./listeners/deleteCron'),
    },
    rootView: 'main'
  }
}