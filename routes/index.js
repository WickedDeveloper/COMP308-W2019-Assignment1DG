// Name: David Gwyn
// Student #: 821 304 912
// Filename: index.js
// Date: 02/15/19

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* Get HOME page */
router.get('/', indexController.displayHomePage);

/* Get ABOUT ME page. */
router.get('/about', indexController.displayAboutPage);

/* Get PROJECTS page. */
router.get('/projects', indexController.displayProjectsPage);

/* Get SERVICES page. */
router.get('/services', indexController.displayServicesPage);

/* Get CONTACT ME page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
