const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    default: {
      connector: 'strapi-hook-bookshelf',
      settings: {
        client,
        filename: env('DATABASE_FILENAME', '.tmp/data.db'), // Path to the SQLite database file
      },
      options: {
        useNullAsDefault: true,
      },
    },
  };

  return {
    defaultConnection: 'default',
    connections,
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};