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
