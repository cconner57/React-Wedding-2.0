import Navbar from '../components/Navbar';
import Welcome from './Welcome';
import Details from './Details';
import Story from './Story';
import Registry from './Registry';
import { useNavigate } from 'react-router-dom';

const Main = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	const navigate = useNavigate();

	return (
		<div className='Main'>
			{isLoggedIn ? (
				<>
					<Navbar />
					<Welcome />
					<Details />
					<Story />
					<Registry />
				</>
			) : (
				<>{() => navigate('/', { replace: true })}</>
			)}
		</div>
	);
};

export default Main;
