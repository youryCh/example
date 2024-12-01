module.exports = {
  development: {
    static: {
      layout: 'layout@http://localhost:3001/remoteEntry.js'
    },
    dynamic: [
      {
        description: 'Example',
        forRoles: [],
        icon: 'UserOutlined',
        route: '/example',
        splat: true,
        // module: './Example',
        subItems: [
          {
            description: 'Главная',
            module: './Main', // TODO: add mf module
            route: '/main',
            scope: 'main' // TODO: check this
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
