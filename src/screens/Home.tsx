import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import wildlifeImage from '../images/wildlife.webp';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import { checkServer } from '../services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../store/store';
import { toTitleCase } from '../utils/helper';
import MenuAppBar from '../components/MenuAppBar';
import Layout from '../components/Layout';

const StyledHomeImage = styled('img')(({ theme }) => ({
	width: '100%', // Adjust image width as needed
	height: 'auto',
	objectFit: 'cover',
	borderRadius: theme.shape.borderRadius, // Apply theme's border radius
	filter: 'brightness(0.8)', // Adjust image brightness for better text readability
	[theme.breakpoints.down('md')]: {
		// Responsive adjustments for smaller screens
		width: '100%' // Make image full width on smaller screens
	}
}));

function Home() {
	const userInfo = useSelector((state: any) => state.user.userInfo);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

	const handleDonation = () => {
		if (userInfo) {
			navigate('/welcome');
		} else {
			navigate('/login');
		}
	};

	return (
		<Layout>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '70vh'
				}}
			>
				<Container maxWidth='lg'>
					<Grid container spacing={2} alignItems='stretch'>
						<Grid item xs={12} md={6}>
							<Typography
								variant='h4'
								component='h3'
								align='center'
								gutterBottom
							>
								{userInfo && 'Hello, ' + toTitleCase(userInfo?.user?.firstName)}
							</Typography>
							<Typography
								variant='h2'
								component='h1'
								align='center'
								gutterBottom
							>
								Let's make a Difference Today
							</Typography>
							<Typography
								variant='body1'
								align='center'
								paragraph
								fontSize={23}
							>
								Every animal deserves a loving home. Donate to animal shelters.
							</Typography>
							<Stack direction='row' spacing={2} justifyContent='center'>
								<CustomButton onClick={handleDonation} color='#e67e22'>
									Donate Now
								</CustomButton>
							</Stack>
						</Grid>
						<Grid item xs={12} md={6}>
							<StyledHomeImage src={wildlifeImage} alt='Donation cause' />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
}

export default Home;
