'use strict';

const db = require('./db-connection');

class UserModel {
  getAll(cb) {
    db.query('SELECT * FROM user', cb);
  }

  getOne(id, cb) {
    db.query('SELECT * FROM user WHERE id = ?', id, cb);
  }
}

module.exports = UserModel;
