import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
	setIsLoggedIn: Function;
	setUser: Function;
}

interface inputsProps {
	firstName?: string;
	lastName?: string;
	street?: string;
	city?: string;
	postalCode?: string;
	password?: string;
}

const Login = ({ setIsLoggedIn, setUser }: LoginProps) => {
	const [inputs, setInputs] = useState<inputsProps>({});
	const [errors, setErrors] = useState({
		firstName: false,
		lastName: false,
		street: false,
		city: false,
		postalCode: false,
		password: false,
	});
	const [isGuest, setIsGuest] = useState(false);
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
		const { firstName, lastName, street, city, postalCode, password } =
			e.target;

		setErrors((error) => ({
			...error,
			firstName: firstName.value.length < 3,
			lastName: lastName.value.length < 3,
			street: street.value.length < 3,
			city: city.value.length < 3,
			postalCode: postalCode.value.length !== 5,
			password: password.value !== process.env.REACT_APP_SECRET,
		}));
		

		// if (!onGuestList(firstName, lastName)) {
		// 	setIsGuest(false);
		// 	setShowMessage(true);
		// }

		if (
			Object.values(errors).includes(false) ||
			Object.values(errors).some((error) => error)
		) {
			setShowMessage(true);
		}

		if (
			Object.values(errors).includes(false) &&
			password.value === process.env.REACT_APP_SECRET
		) {
			setIsLoggedIn(true);
			setUser(inputs);
			sessionStorage.setItem('login', 'true');
			localStorage.setItem('user', JSON.stringify(inputs));
			navigate('/welcome', { replace: true });
		}
	};

	return (
		<div className='Login'>
			<form
				className='Form'
				style={
					showMessage && Object.values(errors).some((error) => error)
						? {
								height: '60vh',
						  }
						: {}
				}
				onSubmit={onFormSubmit}>
				<h3>
					January 21<sup>st</sup>, 2022
				</h3>
				<h2>Chris Conner & Allison Bruins</h2>
				<div>
					<span className={`${errors.firstName && 'Error'}`}>
						<input
							className='firstName'
							type='text'
							name='firstName'
							placeholder='First name'
							onChange={onInputChange}
						/>
					</span>
					<span className={`${errors.lastName && 'Error'}`}>
						<input
							className='lastName'
							type='text'
							name='lastName'
							placeholder='Last name'
							onChange={onInputChange}
						/>
					</span>
				</div>
				<p>Confirm address invitation was sent too</p>
				<span className={`${errors.street && 'Error'}`}>
					<input
						className='street'
						type='text'
						name='street'
						placeholder='Street'
						onChange={onInputChange}
					/>
				</span>
				<div>
					<span className={`${errors.city && 'Error'}`}>
						<input
							className='city'
							type='text'
							name='city'
							placeholder='City'
							onChange={onInputChange}
						/>
					</span>
					<span className={`${errors.postalCode && 'Error'}`}>
						<input
							className='postalCode'
							type='text'
							name='postalCode'
							placeholder='Postal Code'
							onChange={onInputChange}
						/>
					</span>
				</div>
				<hr />
				<p>Enter password from wedding invitation</p>
				<span className={`${errors.password && 'Error'}`}>
					<input
						className='password'
						type='text'
						name='password'
						placeholder='Secret password'
						onChange={onInputChange}
					/>
				</span>
				<button>Login</button>
				{showMessage &&
					(Object.values(errors).some((error) => error) || !isGuest) && (
						<h5 className='Error-Message'>
							{!isGuest
								? `${inputs?.firstName} ${inputs?.lastName} is not on the guest list`
								: `${
										errors.firstName &&
										errors.lastName &&
										errors.street &&
										errors.city &&
										errors.postalCode &&
										errors.password
											? 'All information'
											: errors.firstName || errors.lastName
											? 'Name'
											: errors.street || errors.city || errors.postalCode
											? 'Address'
											: errors.password
											? 'Password'
											: ''
								  } is incorrect`}
						</h5>
					)}
			</form>
		</div>
	);
};

export default Login;
