import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [show, handleNav] = useState(false);

	const windowTransition = () => {
		if (window.scrollY > 10) {
			handleNav(true);
		} else handleNav(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', windowTransition);
		return () => {
			window.removeEventListener('scroll', windowTransition);
		};
	}, []);

	return (
		<div className={`Navbar ${show && 'Navbar-Active'}`}>
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
