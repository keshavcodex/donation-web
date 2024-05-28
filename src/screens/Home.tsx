import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import wildlifeImage from '../images/wildlife.webp';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import { useSelector } from 'react-redux';
import { toTitleCase } from '../utils/helper';
import Layout from '../components/Layout';

const StyledHomeImage = styled('img')(({ theme }) => ({
	width: '120%', // Adjust image width as needed
	height: 'auto',
	objectFit: 'cover',
	filter: 'brightness(0.8)', // Adjust image brightness for better text readability
	[theme.breakpoints.down('md')]: {
		// Responsive adjustments for smaller screens
		width: '100%' // Make image full width on smaller screens
	}
}));

function Home() {
	const userInfo = useSelector((state: any) => state.user.userInfo);
	const navigate = useNavigate();

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
					minHeight: '70vh'
				}}
			>
				<Container maxWidth='lg'>
					<Grid container spacing={2} alignItems='stretch'>
						<Grid item xs={12} md={5}>
							<StyledHomeImage src={wildlifeImage} alt='Donation cause' />
						</Grid>
						<Grid item xs={12} md={7}>
							<Typography
								variant='h4'
								component='h3'
								align='center'
								gutterBottom
							>
								{userInfo && 'Hello, ' + toTitleCase(userInfo?.firstName)}
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
								<CustomButton onClick={handleDonation}>Donate Now</CustomButton>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout>
	);
}

export default Home;
