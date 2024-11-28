module.exports = {
  development: {
    static: {
      layout: 'layout@http://localhost:3001/remoteEntry.js'
    },
    dynamic: []
  },
  production: {
    static: {},
    dynamic: {}
  }
};
