const config = require('config');
const jwt = require('jsonwebtoken');
const aws = require('aws-sdk');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  const jwtsecret = process.env.jwtsecret; //Substitute this for "const jwtsecret = config.get(jwtsecret)" for local deployment

  //check for token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    //Verify token
    const decoded = jwt.verify(token, jwtsecret);

    //Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

module.exports = auth;
