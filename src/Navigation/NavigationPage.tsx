import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
	Navigate
} from 'react-router-dom';
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import Home from '../screens/Home';
import { useSelector } from 'react-redux';
import Welcome from '../screens/welcome';
import Error404 from '../screens/Error404';
import OtpVerification from '../screens/OtpVerification';

function NavigationPage() {
	const isAuthenticated = useSelector((state: any) => state.user.userInfo);

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/welcome' element={<Welcome />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/otp' element={<OtpVerification />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</Router>
	);
}

export default NavigationPage;
