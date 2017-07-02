'use strict';

const router = require('express').Router();
const fileUpload = require('../controllers/fileUpload.js');
const upload = require('multer');

router.route('/api/files')
      .post(upload().single('file'), fileUpload);

module.exports = router;