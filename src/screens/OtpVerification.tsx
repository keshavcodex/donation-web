import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gradientBackground from '../theme/gradient';
import { otpVerify } from '../services/authApi';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../store/store';

function OtpVerification() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [otp, setOtp] = useState('');

	const handleVerification = async () => {
		const email = JSON.parse(localStorage.getItem('email') || '');
		const response: any = await otpVerify({ otp, email });

		if (response?.data?.success) {
			localStorage.removeItem('email');
			localStorage.setItem('userInfo', JSON.stringify(response?.data));
			dispatch(setUserInfo(response));
			navigate('/'); 
		} else {
			alert('Invalid OTP code. Please try again.');
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				p: 4,
				backgroundImage: gradientBackground,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				minHeight: '100vh'
			}}
		>
			<Typography variant='h6' sx={{ mb: 2 }}>
				OTP Verification
			</Typography>
			<Typography variant='body1'>
				Enter the 6-digit OTP code sent to your email.
			</Typography>
			<TextField
				label='OTP Code'
				value={otp}
				onChange={(e) => setOtp(e.target.value)}
				inputProps={{ maxLength: 6 }}
				sx={{ mt: 2 }}
			/>
			<Button variant='contained' sx={{ mt: 2 }} onClick={handleVerification}>
				Verify
			</Button>
		</Box>
	);
}

export default OtpVerification;
