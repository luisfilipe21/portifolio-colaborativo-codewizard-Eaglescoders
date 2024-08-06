const express = require('express');
const { createAnewComment, getAllComments } = require('../controller/commentscontroller');


const router = express.Router();

router.post('/send', createAnewComment);
router.get('/', getAllComments)

module.exports = router;
