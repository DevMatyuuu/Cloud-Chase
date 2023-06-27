module.exports = ({ env }) => ({
    // Other plugin configurations...
    'users-permissions': {
      // Other plugin settings...
      jwt: {
        expiresIn: '90d', // Set the JWT duration to 90 days
      },
    },
  });