const express = require('express');
const mongoose = require('mongoose');  
const router = express.Router();
const Class = require('../models/Class');


router.get('/', async (req, res) => {
    console.log('GET /classes called');
    try {
        const classes = await Class.find();
        res.status(200).send(classes);
    } catch (err) {
        console.error('Error fetching classes:', err);
        res.status(500).send({ error: 'Internal Server Error', details: err.message });
    }
});


router.post('/', async (req, res) => {
    console.log('POST /classes called with data:', req.body);
    const { name, year, teacherID, studentFees } = req.body;

    if (!mongoose.Types.ObjectId.isValid(teacherID)) {
        console.error('Invalid teacherID format:', teacherID);
        return res.status(400).send({ error: 'Invalid teacherID format' });
    }

    try {
        const newClass = new Class({
            name,
            year,
            teacher: new mongoose.Types.ObjectId(teacherID),
            studentFees,
            studentList: []
        });

        await newClass.save();
        res.status(201).send(newClass);
    } catch (err) {
        console.error('Error saving class:', err);
        res.status(400).send({ error: 'Bad Request', details: err.message });
    }
});

module.exports = router;
