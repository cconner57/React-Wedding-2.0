import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<div className='Navbar'>
			<Link to='Welcome' smooth={true}>
				<img
					className='Navbar-Logo'
					src={process.env.PUBLIC_URL + '/images/logo.png'}
					alt='Logo'
				/>
			</Link>
			<Link to='Details' smooth={true}>
				<h1>Details</h1>
			</Link>
			<Link to='Story' smooth={true}>
				<h1>Our Story</h1>
			</Link>
			<Link to='Registry' smooth={true}>
				<h1>Registry</h1>
			</Link>
		</div>
	);
};

export default Navbar;
