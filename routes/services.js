let express = require('express');
let router = express.Router();

let servicesController = require('../controllers/services');

// Get SERVICES Page
router.get('/', servicesController.displayServicesPage);

module.exports = router;