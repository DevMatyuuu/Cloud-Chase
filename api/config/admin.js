module.exports = ({ env }) => ({
    
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
      // Other plugin settings...
      async register(ctx) {
        const { email, password } = ctx.request.body;
  
        try {
          // Check if an admin user already exists in the database
          const adminUsers = await strapi.plugins['users-permissions'].services.user.fetchAll({
            role: 1, // Role ID for admin (adjust according to your role setup)
          });
  
          if (adminUsers.length > 0) {
            // Admin user already exists, do not perform registration
            return ctx.badRequest('Admin user already registered.');
          }
  
          // Create the admin user in the database
          const adminUser = await strapi.plugins['users-permissions'].services.user.add({
            email,
            password,
            role: 1, // Role ID for admin (adjust according to your role setup)
          });
  
          // Return the registered admin user as the response
          return adminUser;
        } catch (error) {
          // Handle any errors that occur during registration
          return ctx.badRequest('Failed to register admin user.');
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

