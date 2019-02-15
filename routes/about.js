let express = require('express');
let router = express.Router();

let aboutController = require('../controllers/about');

// Get ABOUT ME Page
router.get('/', aboutController.displayAboutPage);

module.exports = router;