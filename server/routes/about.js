// Name: David Gwyn
// Student #: 821 304 912
// Filename: about.js
// Date: 02/15/19

let express = require('express');
let router = express.Router();

// Import logic from about controller
let aboutController = require('../controllers/about');

// Get ABOUT ME Page
router.get('/', aboutController.displayAboutPage);

module.exports = router;