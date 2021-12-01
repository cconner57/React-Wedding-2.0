import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<div className='Welcome'>
			<div className='Welcome-Text'>
				<h1>Monday, January 21, 2022</h1>
				<p>
					Chris and Allison joyfully request the pleasure of your company as we
					speak our vows and join in marriage in the presence of friends and
					family.
				</p>
				<Link to='/details'>
					<button>View Details</button>
				</Link>
			</div>
		</div>
	);
};

export default Welcome;
