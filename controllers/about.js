let express = require('express');
let router = express.Router();

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about/index', {
        title: 'About Me'
    });
}