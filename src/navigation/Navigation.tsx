import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Navbar = lazy(() => import('../components/Navbar'));
const Welcome = lazy(() => import('../screens/Welcome'));
const Story = lazy(() => import('../screens/Story'));
const Details = lazy(() => import('../screens/Details'));
const RSVP = lazy(() => import('../screens/RSVP'));
const Gallery = lazy(() => import('../screens/Gallery'));
const Registry = lazy(() => import('../screens/Registry'));
const Login = lazy(() => import('../screens/Login'));

const Navigation = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(
		sessionStorage.getItem('login') ?? ''
	);

	return (
		<Suspense fallback={<span>Loading...</span>}>
			<Router>
				<Navbar isLoggedIn={isLoggedIn} />
				<Switch>
					<Route path='/story' component={Story} />
					<Route path='/details' component={Details} />
					<Route path='/rsvp' component={RSVP} />
					<Route path='/gallery' component={Gallery} />
					<Route path='/registry' component={Registry} />
					<Route path='/welcome' component={Welcome} />
					<Route exact path='/'>
						<Login setIsLoggedIn={setIsLoggedIn} />
					</Route>
				</Switch>
			</Router>
		</Suspense>
	);
};

export default Navigation;
