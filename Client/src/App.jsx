import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Invoice from './pages/Invoice';
import Schedule from './pages/schedule';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/schedule' element={<Schedule />} />
					<Route path='/payment' element={<Payment />} />
					<Route path='/invoice' element={<Invoice />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
