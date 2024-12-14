module.exports = {
  development: {
    static: {
      layout: 'layout@http://localhost:3001/remoteEntry.js'
    },
    dynamic: [
      {
        description: 'Example',
        forRoles: [],
        icon: 'IconList',
        route: '',
        splat: true,
        subItems: [
          {
            description: 'Main',
            module: './Main',
            route: '/main',
            scope: 'main_app',
            icon: 'IconCheck',
            url: 'http://localhost:3005/remoteEntry.js'
          },
          {
            description: 'Project',
            module: './Project',
            route: '/project',
            scope: 'main_app',
            icon: 'IconCheck',
            url: 'http://localhost:3005/remoteEntry.js'
          }
        ]
      }
    ]
  },
  production: {
    static: {},
    dynamic: {}
  }
};
