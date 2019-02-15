let express = require('express');
let router = express.Router();

let projectsController = require('../controllers/projects');

// Get PROJECTS Page
router.get('/', projectsController.displayProjectsPage);

module.exports = router;