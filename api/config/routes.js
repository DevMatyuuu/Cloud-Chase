module.exports = [
    {
      method: 'POST',
      path: '/register-admin',
      handler: 'admin.register',
      config: {
        policies: [],
      },
    },
    // Other routes...
  ];