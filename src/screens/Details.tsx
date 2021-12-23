const Details = () => {
	return (
		<div id='Details'>
			<div className='Details-Column'>
				<div className='Date'>
					<span>
						JAN<h1> | 21 | </h1>2022
					</span>
					<h2>at four o'clock in the afternoon</h2>
				</div>
				<div className='Location'>
					<h2>THE SUNSET GARDEN OF THE BELAMAR HOTEL</h2>
					<h2>Manhattan Beach, California</h2>
					<p>Venue requires proof of Covid Vacination</p>
				</div>
				<div className='Information'>
					<h1>The Details</h1>
					<p>
						Please join us for our wedding and reception at the Belamar Hotel in
						Manhattan Beach
					</p>
					<p>3501 North Sepulveda Boulevard Manhattan Beach, California</p>
				</div>
			</div>
			<div className='Timeline'>
				<div className='Ceremony'>
					<img src={process.env.PUBLIC_URL + '/images/rings.webp'} alt='Rings' />
					<p>4pm</p>
					<p>ceremony</p>
				</div>
				<div className='Cocktail'>
					<img src={process.env.PUBLIC_URL + '/images/drink.webp'} alt='Drink' />
					<p>4:30pm</p>
					<p>cocktail hour</p>
				</div>
				<div className='Dinner'>
					<img src={process.env.PUBLIC_URL + '/images/food.webp'} alt='Food' />
					<p>5:30pm</p>
					<p>dinner</p>
				</div>
				<div className='Dancing'>
					<img
						src={process.env.PUBLIC_URL + '/images/music.webp'}
						alt='Dancing'
					/>
					<p>6:30pm</p>
					<p>dancing</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
