import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';

function Dashboard() {
	return (
		<div>
			<h1>Dashboard</h1>
			<div>
				<Link to='contact'>Contact</Link>
				<Link to='schedule'>Schedule</Link>
				<Link to='payment'>Payment</Link>
				<Link to='invoice'>Generate Invoice</Link>
			</div>
		</div>
	);
}

export default Dashboard;
