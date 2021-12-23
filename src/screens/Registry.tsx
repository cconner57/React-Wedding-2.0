const Registry = () => {
	return (
		<div id='Registry'>
			<a
				className='Card'
				href='https://www.honeyfund.com/wedding/bruins-conner-01-21-2022'>
				<div>
					<h1>Honeyfund</h1>
                    <img src={process.env.PUBLIC_URL + '/images/moments.webp'} alt='Honeyfund' />
				</div>
			</a>
			<a
				className='Card'
				href='https://www.amazon.com/wedding/share/chrisandallison'>
				<div>
					<h1>Amazon</h1>
                    <img src={process.env.PUBLIC_URL + '/images/shopping.webp'} alt='Amazon' />
				</div>
			</a>
		</div>
	);
};

export default Registry;
