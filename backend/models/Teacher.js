const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Teacher = new schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },

    contactnumber: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('Teacher', Teacher);
