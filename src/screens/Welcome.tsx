import { Link } from 'react-scroll';

const Welcome = () => {
	return (
		<div id='Welcome'>
			<div className='Welcome-Text'>
				<h1>Monday, January 21, 2022</h1>
				<p>
					Chris and Allison joyfully request the pleasure of your company as we
					speak our vows and join in marriage in the presence of friends and
					family.
				</p>
				<Link to='Details' smooth={true}>
					<button>View Details</button>
				</Link>
				<Link className='Mobile' to='Story' smooth={true}>
					<button>View Story</button>
				</Link>
				<Link className='Mobile' to='Registry' smooth={true}>
					<button>View Registry</button>
				</Link>
			</div>
		</div>
	);
};

export default Welcome;
