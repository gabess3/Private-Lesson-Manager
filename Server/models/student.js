const mongoose = require('mongoose');

/* const validateEmail = function (email) {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
}; */

const studentSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
		trim: true,
	},
	parentName: {
		type: String,
		required: true,
		trim: true,
	},
	parentEmail: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: 'Email address is required',
		/* 		validate: [validateEmail, 'Please fill a valid email address'],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			'Please fill a valid email address',
		], */
	},
	school: {
		type: String,
		trim: true,
		required: true,
	},
	class: {
		type: String,
		trim: true,
		required: true,
	},
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
