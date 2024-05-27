import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import userAvatar from '../images/user-avatar.png';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import { getDonationsByUser } from '../services/apiServices'; // Assuming a service to fetch user donations
import gradientBackground from '../theme/gradient';
import themeModal from '../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { toTitleCase } from '../utils/helper';
import { setUserInfo } from '../store/store';

const StyledWelcomeSection = styled('section')(({ theme }) => ({
	backgroundColor: "#a4dba4",
	padding: theme.spacing(4),
	borderRadius: theme.shape.borderRadius,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: '400px' // Set minimum height as needed
}));

const StyledDonationCard = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: theme.spacing(3),
	margin: theme.spacing(2),
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: theme.shape.borderRadius,
	maxWidth: '400px', // Adjust width as needed

	'&:hover': {
		// Add hover effect (optional)
		backgroundColor: theme.palette.background,
		cursor: 'pointer'
	}
}));

function Welcome() {
	const navigate = useNavigate();
	const theme = themeModal();
	const dispatch = useDispatch();

	const [donations, setDonations] = React.useState([]);
	const userInfo = useSelector((state: any) => state.user.userInfo);

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

	// Fetch user donations on component mount
	React.useEffect(() => {
		const fetchDonations = async () => {
			try {
				const response = await getDonationsByUser();
				setDonations(response.data); // Assuming response structure
			} catch (error) {
				console.error('Error fetching donations:', error);
			}
		};
		fetchDonations();
	}, []);

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
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column'
					// alignItems: 'center',
					// minHeight: '100vh',
					// backgroundColor: '#f2f2f2' // Light gray background
				}}
			>
				<Container maxWidth='lg'>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography
								variant='h4'
								component='h1'
								align='center'
								gutterBottom
							>
								Welcome back
								{userInfo &&
									', ' + toTitleCase(userInfo?.user?.firstName) + '!'}
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<StyledWelcomeSection>
								<img
									src={userAvatar}
									alt='User avatar'
									style={{ width: '100px', borderRadius: '50%' }}
								/>
								<Typography variant='body1' align='center' gutterBottom>
									You are a compassionate soul! See your impact below.
								</Typography>
							</StyledWelcomeSection>
						</Grid>
						<Grid item xs={12} md={8}>
							{false ? (
								<>
									<Typography
										variant='h5'
										component='h2'
										align='center'
										gutterBottom
									>
										Your Recent Donations
									</Typography>
									<Grid container spacing={2}>
										{/* {donations.map((donation) => (
										<Grid item xs={12} key={donation.id}>
											<StyledDonationCard>
												<Typography variant='body1' align='center'>
													{donation.cause} - {donation.amount}
												</Typography>
												<Typography
													variant='caption'
													align='center'
													color='text.secondary'
												>
													{donation.date}
												</Typography>
											</StyledDonationCard>
										</Grid>
									))} */}
									</Grid>
								</>
							) : (
								<StyledWelcomeSection>
									<Typography variant='body1' align='center'>
										You haven't made any donations yet. Let's change that!
									</Typography>
									<Stack
										direction='row'
										spacing={2}
										justifyContent='center'
										mt={2}
									>
										<CustomButton onClick={() => navigate('/')} color='#e67e22'>
											Donate Now
										</CustomButton>
									</Stack>
								</StyledWelcomeSection>
							)}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
}

export default Welcome;
