const connection = require('../config/connection');
const Student = require('../models/student');

connection.on('error', (err) => err);

connection.once('open', async () => {
	console.log('connected to database!');

	const data = [
		{
			fullName: 'test',
			parentName: 'parent test',
			parentEmail: 'email@yahoo.com',
			school: 'school test',
			class: 'class test',
		},
		{
			fullName: 'test2',
			parentName: 'parent test2',
			parentEmail: 'email2@yahoo.com',
			school: 'school test2',
			class: 'class test2',
		},
	];

	await Student.collection.insertMany(data);

	console.table(data);
	console.log('seed successful!');
	process.exit(0);
});
