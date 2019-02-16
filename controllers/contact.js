// Name: David Gwyn
// Student #: 821 304 912
// Filename: /controllers/contact.js
// Date: 02/14/19

let express = require('express');
let router = express.Router();

// Logic to display Contact page
module.exports.displayContactPage = (req, res, next) => {
    res.render('contact/index', {
        title: 'Contact Me'
    });
}