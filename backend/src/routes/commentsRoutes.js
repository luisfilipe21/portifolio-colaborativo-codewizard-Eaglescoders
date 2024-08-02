const express = require('express');
const { createAnewComment } = require('../controller/commentscontroller');

const router = express.Router();

router.post('/send', createAnewComment);

module.exports = router;
