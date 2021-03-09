const mongoose = require('mongoose');

//Models
const Newsletter = require('../../models/v1/newsletter');

// POST - add newsletter user
exports.save_newsletter_user = (req, res, next) => {
    const newNewsletterUser = new Newsletter({
        _id: new mongoose.Types.ObjectId(),
        created: new Date(),
        email: req.body.email,
        name: req.body.name
    })
    newNewsletterUser
    .save()
    .then((response) => {
        res.status(200).json(true)
    })
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}

exports.get_all_newsletter_users = (req, res, next) => {
    Newsletter.find()
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}