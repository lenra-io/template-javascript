'use strict'
// Views

module.exports = async () => {
  return {
    views: {
      main: require('./views/main'),
      counter: require('./views/counter'),
      home: require('./views/home'),
      menu: require('./views/menu'),
      newPage: require('./views/newPage'),
    },
    listeners: {
      increment: require('./listeners/increment'),
      onEnvStart: require('./listeners/onEnvStart'),
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin')
    },
    lenraRoutes: [
      {
        path: "/",
        widget: {
          type: "view",
          name: "main"
        }
      },
      {
        path: "/newPage",
        widget: {
          type: "view",
          name: "newPage"
        }
      }
    ]
  }
}