let express = require('express');
let router = express.Router();

// GET About Me Page
router.get('/', (req, res, next) => {
    res.render('about/index', {
        title: 'About Me'
    });
});

module.exports = router;