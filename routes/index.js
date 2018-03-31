'use strict';

const router = require('express').Router();
const UserController = require('../controllers/user');
const Auth = require('../middlewares/auth');
const uc = new UserController();
const auth = new Auth();

router
  .get('/', auth.isAuth, uc.getUsers)
  .post('/login', uc.login);

module.exports = router;
