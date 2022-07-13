const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/messages');

router.get('/', (req, res) => {
    res.render('index', {
        title: "Mini Messageboard",
        messages
    });
});

module.exports = router;
