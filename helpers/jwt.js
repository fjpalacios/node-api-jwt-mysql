'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');

class Jwt {
  createToken(user) {
    let payload = {
      sub: user.id,
      email: user.email,
      iat: moment().unix(),
      exp: moment().add(7, 'days').unix()
    };
    return jwt.encode(payload, process.env.JWT_SECRET);
  }

  decodeToken(token) {
    let decoded = new Promise((resolve, reject) => {
      try {
        let payload = jwt.decode(token, process.env.JWT_SECRET);
        if (payload.exp <= moment().unix()) {
          reject({
            status: 401,
            message: 'Token expired'
          });
        }
        resolve(payload.sub);
      } catch (err) {
        reject({
          status: 500,
          message: 'Invalid Token'
        });
      }
    });
    return decoded;
  }
}

module.exports = Jwt;
