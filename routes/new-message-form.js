const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/messages');

router.get('/', (req, res) => {
    res.render('form', {
        title: 'Mini Messageboard'
    })
});

router.post('/', (req, res) => {
    messages.push({
        text: req.body.message,
        user: req.body.author,
        added: new Date()
    });

    res.redirect('/')
})

module.exports = router;
