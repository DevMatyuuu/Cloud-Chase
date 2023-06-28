module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    // Other plugin settings...
    async register(ctx) {
      const { email, password } = ctx.request.body;

      try {
        // Create the admin user in the database
        const adminUser = await strapi.plugins['users-permissions'].services.user.add({
          email,
          password,
          role: 1, // Set the role ID for admin (adjust according to your role setup)
        });

        // Return the registered admin user as the response
        return adminUser;
      } catch (error) {
        // Handle any errors that occur during registration
        return error;
      }
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});

