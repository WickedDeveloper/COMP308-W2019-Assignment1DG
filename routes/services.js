// Name: David Gwyn
// Student #: 821 304 912
// Filename: services.js
// Date: 02/15/19

let express = require('express');
let router = express.Router();

// Import logic for Services controller
let servicesController = require('../controllers/services');

// Get SERVICES Page
router.get('/', servicesController.displayServicesPage);

module.exports = router;