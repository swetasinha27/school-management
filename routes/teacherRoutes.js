const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

router.post('/',async (req, res) => {
    const newTeacher = new Teacher(req.body);
    try{
        await newTeacher.save();
        res.status(201).send(newTeacher);

    } catch (err){
        res.status(400).send(err);
    }
});

router.get('/',async (req, res) => {
    try{
        const teachers = await teacher.find().populate('assignedClass');
        res.status(200).send(teachers);
    } catch (err){
        res.status(500).send(err);
    }
});

router.put('/:id',async(req, res) => {
    try{
        const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updatedTeacher){
            return res.status(404).send();
        }
        res.status(200).send(updatedTeacher);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete('/:id',async (req, res) => {
    try{
        const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
        if( !deletedTeacher){
            return res.status(404).send();
        }
        res.status(200).send('Teacher deleted');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;