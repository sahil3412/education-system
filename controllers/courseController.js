const Course = require('../models/course');

exports.createCourse = async (req, res) => {
    const course = new Course(req.body);
    try {
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const course = await Course.findByIdAndUpdate(id, req.body, { new: true });
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const course = await Course.findByIdAndDelete(id);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json({ message: 'Course deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
