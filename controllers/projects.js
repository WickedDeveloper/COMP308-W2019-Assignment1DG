let express = require('express');
let router = express.Router();

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects/index', {
        title: 'Projects'
    });
}