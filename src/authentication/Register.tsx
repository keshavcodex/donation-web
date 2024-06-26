import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import CustomTextField from '../components/CustomTextField';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authApi';
import { Response, UserInfo } from '../interface/response';
import IconTextField from '../components/IconTextField';
import Layout from '../components/Layout';

function Register() {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isRegistering, setIsRegistering] = useState(false);

	const validateUser = (user: UserInfo) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const errors = [];
		if (user.firstName.length < 2 || user.lastName.length < 2) {
			errors.push('First and Last name must be at least 2 characters.');
		}
		if (!user.email || !emailRegex.test(user.email)) {
			errors.push('Please enter a valid email address.');
		}
		if (user.phone.length < 10) {
			errors.push('Please enter a valid phone number.');
		}
		if (user?.password && user?.password.length < 6) {
			errors.push('Password must be at least 6 characters.');
		}
		if (user?.password !== user?.confirmPassword) {
			errors.push('Password mismatch with Confirm Password.');
		}
		if (errors.length > 0) {
			const combinedErrors = errors.join('\n\n');
			window.alert(combinedErrors);
			return false;
		} else return true;
	};

	const handleRegister = async () => {
		const user = {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			phone
		};
		if (validateUser(user)) {
			setIsRegistering(true);
			try {
				const res: any = await register(user);
				console.log('res in register:', res);
				const response: Response = res?.data || res?.response?.data;
				console.log('response in register:', response);
				if (response?.success) {
					localStorage.setItem('email', JSON.stringify(user.email));
					navigate('/otp');
				} else {
					window.alert('Registration failed, ' + response?.errorMessage);
				}
			} catch (error) {
				console.log('error of login', JSON.stringify(error, null, 2));
			}
			setIsRegistering(false);
		}
	};

	return (
		<Layout>
			<Box mt={2} component='form' noValidate autoComplete='off'>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							maxWidth: 400,
							width: '100%',
							mx: 2
						}}
					>
						<Typography sx={{ fontFamily: 'monospace', fontSize: 20 }}>
							Empower Wildlife Conservation with Your Registration
						</Typography>
						<Stack direction={'row'} gap={2}>
							<CustomTextField
								id={'firstName'}
								label={'First Name'}
								value={firstName}
								setValue={setFirstName}
							/>
							<CustomTextField
								id={'lastName'}
								label={'Last Name'}
								value={lastName}
								setValue={setLastName}
							/>
						</Stack>

						<CustomTextField
							id={'phone'}
							label={'Phone'}
							value={phone}
							setValue={setPhone}
						/>
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
						<IconTextField
							id={'confirmPassword'}
							label={'Confirm Password'}
							value={confirmPassword}
							setValue={setConfirmPassword}
						/>
						{isRegistering ? (
							<Box>
								<CircularProgress />
							</Box>
						) : (
							<CustomButton onClick={handleRegister}>Register</CustomButton>
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
						Already have an account?
					</Typography>
					<Typography
						sx={{
							fontFamily: 'monospace',
							fontSize: 18,
							textDecoration: 'underline',
							mx: 1
						}}
						onClick={() => navigate('/login')}
					>
						SignIn
					</Typography>
				</Box>
			</Box>
		</Layout>
	);
}

export default Register;
