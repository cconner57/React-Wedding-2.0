import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	return (
		<>
			{isLoggedIn && (
				<div className='Navbar'>
					<Link to='/welcome'>
						<img
							className='Navbar-Logo'
							src={process.env.PUBLIC_URL + '/images/logo.png'}
							alt='Logo'
						/>
					</Link>
					<Link to='/details'>
						<h1>Details</h1>
					</Link>
					<Link to='/story'>
						<h1>Our Story</h1>
					</Link>
					<Link to='/rsvp'>
						<h1>RSVP</h1>
					</Link>
					<Link to='/registry'>
						<h1>Registry</h1>
					</Link>
				</div>
			)}
		</>
	);
};

export default Navbar;
