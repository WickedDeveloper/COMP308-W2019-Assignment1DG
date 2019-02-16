// Name: David Gwyn
// Student #: 821 304 912
// Filename: /controllers/projects.js
// Date: 02/14/19

let express = require('express');
let router = express.Router();

// Logic to display Projects page
module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects/index', {
        title: 'Projects'
    });
}