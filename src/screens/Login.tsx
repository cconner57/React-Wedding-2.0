import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ setIsLoggedIn }: any) => {
	const [inputs, setInputs] = useState({
		firstName: '',
		lastName: '',
		email: '',
	});
	const [errors, setErrors] = useState({
		firstName: false,
		lastName: false,
		email: false,
		password: false,
	});

	const history = useHistory();
	let secret = 'Alohamora';
	sessionStorage.clear();

	const onFormSubmit = (e: any) => {
		e.preventDefault();

		e.target.firstName.value.length < 3
			? setErrors((error) => {
					return { ...error, firstName: true };
			  })
			: setErrors((error) => {
					return { ...error, firstName: false };
			  });
		e.target.lastName.value.length < 3
			? setErrors((error) => {
					return { ...error, lastName: true };
			  })
			: setErrors((error) => {
					return { ...error, lastName: false };
			  });
		e.target.email.value.length < 3
			? setErrors((error) => {
					return { ...error, email: true };
			  })
			: setErrors((error) => {
					return { ...error, email: false };
			  });
		e.target.password.value.length < 3
			? setErrors((error) => {
					return { ...error, password: true };
			  })
			: setErrors((error) => {
					return { ...error, password: false };
			  });
		if (
			!errors.firstName &&
			!errors.lastName &&
			!errors.email &&
			!errors.password &&
			e.target.password.value === secret
		) {
			setIsLoggedIn(() => true);
			sessionStorage.setItem('login', 'true');
			history.replace('/welcome');
		}
	};

	return (
		<div className='Login'>
			<form className='Form' onSubmit={onFormSubmit}>
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
						/>
					</span>
					<span className={`${errors.lastName && 'Error'}`}>
						<input
							className='lastName'
							type='text'
							name='lastName'
							placeholder='Last name'
						/>
					</span>
				</div>
				<span className={`${errors.email && 'Error'}`}>
					<input
						className='email'
						type='email'
						name='email'
						placeholder='Email'
					/>
				</span>
				<p>Enter the password provided on the wedding invitation</p>
				<span className={`${errors.password && 'Error'}`}>
					<input
						className={`password ${errors.password && 'Error'}`}
						type='text'
						name='password'
						placeholder='Secret password'
					/>
				</span>
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
