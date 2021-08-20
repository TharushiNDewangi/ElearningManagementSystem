const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ClassSchedule = new schema({
    ClassId: {
        type: String,
        required: true,
    },
    hall: {
        type: String,
        required: true,
    },
    teachername: {
        type: String,
        required: true,
    },

    Studentbatch: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
        trim: true,
    },
    starttime: {
        type: String,
        required: true,
        trim: true,
    },
    endtime: {
        type: String,
        required: true,
        trim: true,
    },
});

const classshedule = mongoose.model('classschedule', ClassSchedule);
module.exports = classshedule;
