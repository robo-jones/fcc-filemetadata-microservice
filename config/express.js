'use strict';

const express = require('express');
const router = require('../routes/files.js');

const app = express();

app.use(router);

module.exports = app;