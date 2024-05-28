import Layout from '../components/Layout';
import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import image404 from '../images/image404.png';
import CustomButton from '../components/CustomButton';

function Error404() {
	return (
		<Layout>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					height: '70vh'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						mt: 2
					}}
				>
					<img
						src={image404}
						alt='Error 404 Illustration'
						style={{ maxWidth: '800px', width: '350px' }}
					/>
					<Typography variant='h3' gutterBottom>
						Whoops! Looks like you're lost.
					</Typography>
					<Typography variant='body1' gutterBottom>
						The page you're looking for could not be found. It may be
						unavailable or removed.
					</Typography>
					<Stack direction='row' spacing={2}>
						<CustomButton variant='contained' href='/'>
							Take me home
						</CustomButton>
						<Button variant='outlined' href='/contact'>
							Contact Us
						</Button>
					</Stack>
				</Box>
			</Box>
		</Layout>
	);
}

export default Error404;
