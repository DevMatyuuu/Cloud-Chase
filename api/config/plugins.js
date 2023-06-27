module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('cloud-chase'),
          api_key: env('961165283761377'),
          api_secret: env('mJxbMFJauPwWsCLcE0i2M23VGQY'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });