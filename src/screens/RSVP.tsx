import { useState } from 'react';
import guestList from '../GuestList.json';

interface RSVPProps {
	user: {
		firstName: string;
		lastName: string;
	};
}
const onGuestList = (firstName: string, lastName: string) => {
	const guest = guestList.find(
		(guest) =>
			(guest.firstName === firstName || guest.alias[0] === firstName) &&
			guest.lastName[0] === lastName
	);
	return guest;
};
const RSVP = ({ user }: RSVPProps) => {
	const { firstName, lastName } = user;

	const guest = onGuestList(firstName, lastName);
	const [additionalGuest, setAdditionalGuest] = useState(false);

	return (
		<form className='RSVP'>
			<div className='RSVP-Card'>
				<div className='Card-LeftColumn'>
					<h1>RSVP</h1>
					<p>Your response is requested by November 30, 2021</p>
					<div className='Guest'>
						<p>for our Adults Only Wedding and Reception</p>
						<div className='Guest-Name'>
							<p>{guest?.gender === 'male' ? 'Mr.' : 'Ms.'}</p>
							<p>
								{` ${guest?.firstName} ${lastName}`}
								{additionalGuest && ` & ${guest?.guest}`}
							</p>
							{guest?.guest !== '' && additionalGuest === false && (
								<button
									onClick={() =>
										setAdditionalGuest(true)
									}>{`+ ${guest?.guest}?`}</button>
							)}
						</div>
						<label htmlFor='attending'>
							<input type='radio' name='attending' value='Attending' />
							will happily be there to celebrate
						</label>
						<label htmlFor='notAttending'>
							<input type='radio' name='attending' value='Not Attending' />
							will celebtrate from afar
						</label>
					</div>
					<div className='Food'>
						<p>Please select one food option per guest:</p>
						<label>
							<div className='Food-Select'>
								{!additionalGuest ? (
									<select>
										<option value='0'>0</option>
										<option value='1'>1</option>
									</select>
								) : (
									<select>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
									</select>
								)}
							</div>
							Sesame Crusted Tofu
						</label>
						<label>
							<div className='Food-Select'>
								{!additionalGuest ? (
									<select>
										<option value='0'>0</option>
										<option value='1'>1</option>
									</select>
								) : (
									<select>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
									</select>
								)}
							</div>
							Brie and Asparagus Stuffed Chicken Breast
						</label>
					</div>
					<div className='SongRequest'>
						<label htmlFor='songRequest'>
							Song that will get you on the dance floor:
						</label>
						<input
							type='text'
							name='songs'
							id='songRequest'
							placeholder='Artist & Song'
						/>
					</div>
				</div>
				<div className='Card-RightColumn'>
					<img
						className='Stamp'
						src={process.env.PUBLIC_URL + '/images/stamp.png'}
						alt='stamp'
					/>
					<div className='Delivery'>
						<h2>Kindly deliver to</h2>
						<p>ALLISON BRUINS & CHRIS CONNER</p>
						<p>2456 ONEIDA ST</p>
						<p>PASADENA, CALIFORNIA 91107</p>
					</div>
				</div>
			</div>
			<button className='Submit'>Send card</button>
		</form>
	);
};

export default RSVP;
