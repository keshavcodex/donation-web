import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import Home from '../screens/Home';
import Welcome from '../screens/welcome';
import Error404 from '../screens/Error404';
import OtpVerification from '../screens/OtpVerification';
import Profile from '../screens/Profile';

function NavigationPage() {

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/welcome' element={<Welcome />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/otp' element={<OtpVerification />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</Router>
	);
}

export default NavigationPage;
