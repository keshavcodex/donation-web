import {
	Box,
	Button,
	CircularProgress,
	TextField,
	Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import themeModal from '../theme/theme';
import CustomTextField from '../components/CustomTextField';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import gradientBackground from '../theme/gradient';
import { login } from '../services/authApi';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../store/store';

function Login() {
	const theme = themeModal();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogging, setIsLogging] = useState(false);

	useEffect(() => {
		checkUserInLocal();
	}, []);

	const checkUserInLocal = () => {
		try {
			const user = localStorage.getItem('userInfo');
			if (user != null) dispatch(setUserInfo(JSON.parse(user || '')));
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogin = async () => {
		setIsLogging(true);
		try {
			const response = await login({ email, password });
			if (response?.success) {
				localStorage.setItem('userInfo', JSON.stringify(response));
				dispatch(setUserInfo(response));
				navigate('/welcome');
			} else {
				window.alert('Login failed, Please confirm email & password.');
				console.log(response);
			}
		} catch (error) {
			console.log('error of login', JSON.stringify(error, null, 2));
		}
		setIsLogging(false);
	};

	return (
		<Box
			sx={{
				backgroundImage: gradientBackground, // Set background gradient
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				minHeight: '100vh'
			}}
		>
			<Box sx={{ display: 'flex', justifyContent: 'start', p: 2 }}>
				<CustomButton
					textColor={theme.main}
					variant='outlined'
					onClick={() => navigate('/')}
				>
					Home
				</CustomButton>
			</Box>
			<Box component='form' noValidate autoComplete='off'>
				<Typography sx={{ fontFamily: 'monospace', fontSize: 20 }}>
					Login to donation app
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							maxWidth: 400,
							width: '100%',
							mx: 2
						}}
					>
						<CustomTextField
							label={'Email'}
							value={email}
							setValue={setEmail}
						/>
						<CustomTextField
							label={'Password'}
							value={password}
							setValue={setPassword}
						/>
						{isLogging ? (
							<Box>
								<CircularProgress color='success' />
							</Box>
						) : (
							<CustomButton onClick={handleLogin}>Login</CustomButton>
						)}
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						my: 2
					}}
				>
					<Typography sx={{ fontFamily: 'monospace', fontSize: 18 }}>
						Don't have an account?
					</Typography>
					<Typography
						sx={{
							fontFamily: 'monospace',
							fontSize: 18,
							textDecoration: 'underline',
							mx: 1
						}}
						onClick={() => navigate('/register')}
					>
						SignUp
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Login;
