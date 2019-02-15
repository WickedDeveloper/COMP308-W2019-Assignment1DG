let express = require('express');
let router = express.Router();

// GET Services Page
router.get('/', (req, res, next) => {
    res.render('services/index', {
        title: 'Services'
    });
});

module.exports = router;