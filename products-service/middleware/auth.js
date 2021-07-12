const jwt = require('jsonwebtoken');
var _ = require('lodash');
var flatten = require('flat')

const SECRET = 'secret%&(!';

module.exports = async (req, res, next) => {
  let token;
  const headers = flatten(req.headers);
  if (
    headers.authorization
  ) {
    token = headers.authorization;
  }
  if (!token) {
     return res.status(401).json({ error: 'token missing' })
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).json({ error: 'token invalid' })
  }
};