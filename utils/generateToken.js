const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = process.env;

module.exports = ({ user_id, first_name, last_name, email }) => {
  return jwt.sign(
    {
      // exp: Math.floor(Date.now() / 1000) + (60 * 60), // Expira en una hora
      data: { user_id, first_name, last_name, email },
    },
    '1234',
    { expiresIn: '48h' }
  );
};
