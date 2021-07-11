const jwt = require('jsonwebtoken');
const secret = 'secret%&(!';

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1] || '';
    const decodedToken = await jwt.verify(token, secret);
    const userId = decodedToken.userId;
    if (userId) {
      req.user = user;
      next();
    }
  } catch(exp) {
    console.log(exp.message);
    return res.status(401).json({
      message: 'Not Authorized'
    });
  }
};