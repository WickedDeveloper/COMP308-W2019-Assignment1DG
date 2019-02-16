// Name: David Gwyn
// Student #: 821 304 912
// Filename: /controllers/about.js
// Date: 02/14/19

let express = require('express');
let router = express.Router();

// Logic to display the About Me page
module.exports.displayAboutPage = (req, res, next) => {
    res.render('about/index', {
        title: 'About Me'
    });
}