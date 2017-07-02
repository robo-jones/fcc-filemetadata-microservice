'use strict';

const app = require('./config/express.js');
const config = require('./config/config.js');

app.listen(config.server.port);

module.exports = app;