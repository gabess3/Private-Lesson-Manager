import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

function Contact() {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5173/api/students/', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
		setStudents(data);
	}, []);

	return (
		<div>
			<h1>Contact</h1>
			<div>
				<table>
					<tbody>
						<tr>
							<th>Full Name</th>
							<th>Parent Name</th>
							<th>Parent Email</th>
							<th>School</th>
							<th>Class</th>
						</tr>
						{data.map((item) => (
							<tr key={item.fullName}>
								<td>{item.fullName}</td>
								<td>{item.parentName}</td>
								<td>{item.parentEmail}</td>
								<td>{item.school}</td>
								<td>{item.class}</td>
								<td>
									<button>Edit</button>
								</td>
								<td>
									<button>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<button>Add New Student +</button>
			</div>
			<Link to='/'>Let's go home!</Link>
		</div>
	);
}

export default Contact;
