'use strict';

require('dotenv').load();

const express = require('express');
const bodyParser = require('body-parser');
const port = (process.env.PORT || 3000);

let app = express();

app
  .set('port', port)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(require('./routes/index'))
  .listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });

module.exports = app;
