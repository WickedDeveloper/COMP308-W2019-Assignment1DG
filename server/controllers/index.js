// Name: David Gwyn
// Student #: 821 304 912
// Filename: /controllers/index.js
// Date: 02/14/19

let express = require('express');
let router = express.Router();


// Logic to display Home page
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

// Logic to display About page
module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About Me' });
}

// Logic to display Projects page
module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects' });
}

// Logic to display Services page
module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services' });
}

// Logic to display Contact Me page
module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact Me' });
}