let express = require('express');
let router = express.Router();

// GET Contact Me Page
router.get('/', (req, res, next) => {
    res.render('contact/index', {
        title: 'Contact Me'
    });
});

module.exports = router;