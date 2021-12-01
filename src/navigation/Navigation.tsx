import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Navbar = lazy(() => import('../components/Navbar'));
const Welcome = lazy(() => import('../screens/Welcome'));
const Story = lazy(() => import('../screens/Story'));
const Details = lazy(() => import('../screens/Details'));
const RSVP = lazy(() => import('../screens/RSVP'));
const Gallery = lazy(() => import('../screens/Gallery'));
const Registry = lazy(() => import('../screens/Registry'));
const Login = lazy(() => import('../screens/Login'));

const Navigation = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		street: '',
		city: '',
		postalCode: '',
		password: '',
	});
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
		Boolean(sessionStorage.getItem('login')) ?? false
	);

	return (
		<Suspense fallback={<span>Loading...</span>}>
			<BrowserRouter>
				<Navbar isLoggedIn={isLoggedIn} />
				<Routes>
					<Route path='/story' element={<Story />} />
					<Route path='/details' element={<Details />} />
					<Route path='/rsvp' element={<RSVP user={user} />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/registry' element={<Registry />} />
					<Route path='/welcome' element={<Welcome />} />
					<Route
						index
						element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
					/>
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
};

export default Navigation;
