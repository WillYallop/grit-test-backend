const mongoose = require('mongoose');

const newsletterUsersSchema = mongoose.Schema({
    // User Account Data 
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    created: { type: Date },
    name: { 
        type: String, 
        match: /^[a-z A-Z]+(?:-[a-z A-Z]+)*$/
    }
});

module.exports = mongoose.model('NewsletterUsers', newsletterUsersSchema);