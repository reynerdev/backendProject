const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

module.exports = {
  verifyToken: async (req, res, next) => {
    const { authorization } = req.headers;
    // 'Bearer header.payload.token' -> ['Bearer', 'header.payload.token'] -> [1] -> 'header...'
    try {
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, '1234');
      req.user = decoded.data;
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        error: "unauthorized, you must provide Authorization as 'Bearer token'",
      });
    }
  },
};
