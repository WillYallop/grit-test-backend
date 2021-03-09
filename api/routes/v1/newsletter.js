const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

//Controllers
const NewsletterController = require('../../controllers/v1/newsletter');

// ROUTES
router.get('/', jsonParser, NewsletterController.get_all_newsletter_users); //Get current user data
router.post('/', jsonParser, NewsletterController.save_newsletter_user); // Save new newsletter user

module.exports = router;