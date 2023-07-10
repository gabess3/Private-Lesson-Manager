const Student = require('../models/student');

module.exports = {
	getAllStudents(req, res) {
		console.log('test');
		Student.find()
			.then((students) => {
				return res.json(students);
			})
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},

	getOneStudent(req, res) {
		try {
		} catch {}
	},
	editStudent(req, res) {
		try {
		} catch {}
	},
	addStudent(req, res) {
		try {
		} catch {}
	},
	deleteStudent(req, res) {
		try {
		} catch {}
	},
};
