import { Box, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';
import CustomTextField from '../components/CustomTextField';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authApi';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../store/store';
import Layout from '../components/Layout';
import IconTextField from '../components/IconTextField';

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogging, setIsLogging] = useState(false);

	const handleLogin = async () => {
		setIsLogging(true);
		try {
			const response = await login({ email, password });
			if (response?.success) {
				localStorage.setItem('userInfo', JSON.stringify(response?.user));
				dispatch(setUserInfo(response?.user));
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
		<Layout>
			<Box mt={2} component='form' noValidate autoComplete='off'>
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
							id={'email'}
							label={'Email'}
							value={email}
							setValue={setEmail}
						/>
						<IconTextField
							id={'password'}
							label={'Password'}
							value={password}
							setValue={setPassword}
						/>
						{isLogging ? (
							<Box>
								<CircularProgress />
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
		</Layout>
	);
}

export default Login;
