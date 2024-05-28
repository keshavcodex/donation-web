import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { otpVerify } from '../services/authApi';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../store/store';
import Layout from '../components/Layout';

function OtpVerification() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [otp, setOtp] = useState('');

	const handleVerification = async () => {
		const email = JSON.parse(localStorage.getItem('email') || '');
		const response: any = await otpVerify({ otp, email });

		if (response?.data?.success) {
			localStorage.removeItem('email');
			localStorage.setItem('userInfo', JSON.stringify(response?.data?.user));
			dispatch(setUserInfo(response?.data?.user));
			navigate('/');
		} else {
			alert('Invalid OTP code. Please try again.');
		}
	};

	return (
		<Layout>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					mt: 2
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
		</Layout>
	);
}

export default OtpVerification;
