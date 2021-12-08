import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../screens/Main';
import Login from '../screens/Login';

const Navigation = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
		Boolean(sessionStorage.getItem('login')) ?? false
	);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/welcome' element={<Main isLoggedIn={isLoggedIn} />} />
				<Route index element={<Login setIsLoggedIn={setIsLoggedIn} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;
