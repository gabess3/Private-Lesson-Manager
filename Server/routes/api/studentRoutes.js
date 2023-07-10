const router = require('express').Router();
const { getAllStudents } = require('../../controllers/studentControllers');

// /api/students
router.get('/', getAllStudents);

module.exports = router;
