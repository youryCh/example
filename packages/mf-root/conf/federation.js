module.exports = {
  development: {
    static: {
      layout: 'layout@http://localhost:3001/remoteEntry.js'
    },
    dynamic: [
      {
        description: 'Example',
        forRoles: [],
        icon: 'Info',
        route: '/example',
        splat: true,
        subItems: [
          // {
          //   description: 'Главная',
          //   module: './Main',
          //   route: '/main',
          //   scope: ''
          // }
        ]
      }
    ]
  },
  production: {
    static: {},
    dynamic: {}
  }
};
