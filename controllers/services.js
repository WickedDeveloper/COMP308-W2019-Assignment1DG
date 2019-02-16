// Name: David Gwyn
// Student #: 821 304 912
// Filename: /controllers/services.js
// Date: 02/14/19

let express = require('express');
let router = express.Router();

// Logic to display Services page
module.exports.displayServicesPage = (req, res, next) => {
    res.render('services/index', {
        title: 'Services'
    });
}