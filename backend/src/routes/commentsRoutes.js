const express = require('express');
const { createAnewComment } = require('../controller/commentscontroller');

const router = express.Router();

router.post('/send-comments', createAnewComment);

module.exports = router;
