// Name: David Gwyn
// Student #: 821 304 912
// Filename: contact.js
// Date: 02/15/19

let express = require('express');
let router = express.Router();

// Import logic for Contact controller
let contactController = require('../controllers/contact');

// Get CONTACT ME Page
router.get('/', contactController.displayContactPage);

module.exports = router;