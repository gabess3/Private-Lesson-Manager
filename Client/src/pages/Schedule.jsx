import React from 'react';
import { Link } from 'react-router-dom';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function Schedule() {
	return (
		<div>
			<h1>Schedule</h1>
			<table>
				<tbody>
					<tr>
						{days.map((item) => (
							<th>{item}</th>
						))}
					</tr>
				</tbody>
			</table>
			<Link to='/'>Let's go home!</Link>
		</div>
	);
}

export default Schedule;
