let express = require('express');
let router = express.Router();

let contactController = require('../controllers/contact');

// Get CONTACT ME Page
router.get('/', contactController.displayContactPage);

module.exports = router;