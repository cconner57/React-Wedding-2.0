import { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
	// const [time, setTime] = useReducer<Number>();

	// useEffect(() => {
	// 	const today = Number(new Date());
	// 	const wedDay = Number(new Date('01/21/2022'));

	// 	const difference = wedDay - today;
	// 	const days = Math.ceil(difference / (1000 * 3600 * 24));

	// 	setTime(days);
	// });

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
			{/* <p>{time} Months {time} days</p> */}
			</div>
		</div>
	);
};

export default Welcome;
