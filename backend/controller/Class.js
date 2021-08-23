//const router = express.Router();
const ClassSchedule = require('../models/Class');
const Teacher = require('../models/Teacher');
const shortid = require('shortid');
const slugify = require('slugify');

exports.createClass = async (req, res) => {
    if (req.body) {
        try {
            const newschedule = new ClassSchedule(req.body);
            await newschedule.save();
            res.status(201).json({ id: newschedule._id });
        } catch (error) {
            res.status(406).json({ error: error.message });
        }
    }
};

exports.getall = async (req, res) => {
    await ClassSchedule.find({})
        .then((data) => {
            res.status(200).send({ data: data });
        })
        .catch((err) => {
            res.status(500).send({ error: err.massage });
            console.log(err);
        });
};

exports.getAllTeachers = async (req, res) => {
    try {
        const getAllTeachers = await Teacher.find({}).select('name');
        res.status(200).json({ Teachers: getAllTeachers });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
