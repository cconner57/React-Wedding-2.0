import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }: { setIsLoggedIn: Function }) => {
	const [inputs, setInputs] = useState({});
	const [error, setError] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowMessage(() => false);
		}, 5000);
		return () => clearTimeout(timer);
	}, [showMessage]);

	const navigate = useNavigate();

	useEffect(() => {
		sessionStorage.clear();
		localStorage.clear();
	}, []);

	const onInputChange = (e: any) => {
		const { name, value } = e.target;
		setInputs((input) => ({ ...input, [name]: value }));
	};

	const onFormSubmit = (e: any) => {
		e.preventDefault();
		const { password } = e.target;

		setError(password.value !== process.env.REACT_APP_SECRET);

		error && setShowMessage(true);

		if (!error && password.value === process.env.REACT_APP_SECRET) {
			setIsLoggedIn(true);
			sessionStorage.setItem('login', 'true');
			localStorage.setItem('user', JSON.stringify(inputs));
			navigate('/welcome', { replace: true });
		}
	};

	return (
		<div className='Login'>
			{window.screen.width < 768 ? (
				<div>
					<h3 className='Form'>Coming Soon</h3>
				</div>
			) : (
				<form
					className='Form'
					style={
						showMessage && error ? { minHeight: '40vh' } : { minHeight: '35vh' }
					}
					onSubmit={onFormSubmit}>
					<h3>
						January 21<sup>st</sup>, 2022
					</h3>
					<h2>Chris Conner & Allison Bruins</h2>
					<p>Enter the password from the wedding invitation</p>
					<span className={`${error && 'Error'}`}>
						<input
							className='password'
							type='text'
							name='password'
							placeholder='Secret password'
							onChange={onInputChange}
						/>
					</span>
					<button>Login</button>
					{showMessage && error && (
						<h5 className='Error-Message'>
							{error && 'Password is incorrect'}
						</h5>
					)}
				</form>
			)}
		</div>
	);
};

export default Login;
