module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

  {
    name: 'cors',
    resolve: 'koa-cors',
    config: {
      origin: ['https://cloud-chase.vercel.app', 'http://cloud-chase.vercel.app'],
    },
  },
]



