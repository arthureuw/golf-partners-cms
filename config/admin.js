module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a4e74b6f5e8e38922f6cac92952de151'),
  },
});
