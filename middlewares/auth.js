'use strict';

const Jwt = require('../helpers/jwt');
const jwt = new Jwt();

class Auth {
  isAuth(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: 'You have no authorization' });
    }
    let token = req.headers.authorization.split(' ')[1];
    jwt.decodeToken(token)
      .then(response => {
        req.user = response;
        next();
      })
      .catch(response => {
        res.status(response.status).send({ message: 'You have no authorization' });
      });
  }
}

module.exports = Auth;
