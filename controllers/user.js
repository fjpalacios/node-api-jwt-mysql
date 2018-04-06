'use strict';

const Jwt = require('../helpers/jwt');
const UserModel = require('../models/user');
const um = new UserModel();
const jwt = new Jwt();
const bcrypt = require('bcrypt');

class UserController {
  getUsers(req, res) {
    um.getAll((err, users) => {
      if (err) {
        return res.status(500)
          .send({ message: 'Request error' });
      }
      if (!users) {
        return res.status(404).send({ message: 'No users found' });
      }
      res.status(200).send({ users });
    });
  }

  login(req, res) {
    let id = req.body.id;
    um.getOne(id, (err, user) => {
      if (err) {
        return res.status(500)
          .send({ message: 'Login error' });
      }
      if (!user) {
        return res.status(500).send({ message: 'Invalid username or password' });
      }
      let password = req.body.password;
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          let token = jwt.createToken(user[0]);
          return res.status(200).send({ token: token });
        }
        return res.status(500)
          .send({ message: 'Invalid username or password' });
      });
    });
  }
}

module.exports = UserController;
