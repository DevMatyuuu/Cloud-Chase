const path = require('path');

  module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'strapi-hook-bookshelf',
        settings: {
          client: 'sqlite',
          filename: env('DATABASE_FILENAME', '.tmp/data.db'), // Path to the SQLite database file
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  });

