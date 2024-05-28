import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import Home from '../screens/Home';
import Welcome from '../screens/welcome';
import Error404 from '../screens/Error404';
import OtpVerification from '../screens/OtpVerification';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import { useSelector } from 'react-redux';

function NavigationPage() {
	const isAuthenticated = useSelector((state: any) => state.user.userInfo);
	return (
		<Router>
			{isAuthenticated ? (
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Error404 />} />
					<Route path='/welcome' element={<Welcome />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/profile/edit' element={<EditProfile />} />
				</Routes>
			) : (
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Error404 />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/otp' element={<OtpVerification />} />
				</Routes>
			)}
		</Router>
	);
}

export default NavigationPage;
