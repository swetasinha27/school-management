const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// GET all classes
router.get('/', async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).send(classes);
    } catch (err) {
        console.error('Error fetching classes:', err);
        res.status(500).send({ error: 'Internal Server Error', details: err.message });
    }
});

// Create new class
router.post('/', async (req, res) => {
    const { name, year, teacherID, studentFees } = req.body;

    // Validate teacherID
    if (!mongoose.Types.ObjectId.isValid(teacherID)) {
        return res.status(400).send({ error: 'Invalid teacherID format' });
    }

    try {
        const newClass = new Class({
            name,
            year,
            teacher: new mongoose.Types.ObjectId(teacherID),  // Correct usage
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
