// Name: David Gwyn
// Student #: 821 304 912
// Filename: projects.js
// Date: 02/15/19

let express = require('express');
let router = express.Router();

// Import logic for Projects controller
let projectsController = require('../controllers/projects');

// Get PROJECTS Page
router.get('/', projectsController.displayProjectsPage);

module.exports = router;