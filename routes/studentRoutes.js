const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.post('/',async (req, res) => {
    const newStudent = new Student(req.body);
    try{
        await newStudent.save();
        res.status(201).send(newStudent);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/',async (req, res) => {
    try{
        const students = await Student.find().populate('assignedClass');
        res.status(200).send(students);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put('/:id',async ( req, res) => {
    try{
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updatedStudent) {
            return res.status(404).send();
        }
        res.status(200).send(updatedStudent);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if(!deletedStudent) {
            return res.status(404).send();
        }
        res.status(200).send('Student deleted');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;