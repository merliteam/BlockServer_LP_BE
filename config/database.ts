module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'authdb'),
      user: env('DATABASE_USERNAME', 'strapi_auth_user'),
      password: env('DATABASE_PASSWORD', '123456'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
