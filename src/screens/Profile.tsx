import Layout from '../components/Layout';
import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function Profile() {
	const [editMode, setEditMode] = useState(false);
	const [userData, setUserData] = useState({
		name: '',
		email: ''
		// Add other user details here (e.g., bio, location)
	});

	// Function to handle user data changes
	const handleInputChange = (event: any) => {
		setUserData({ ...userData, [event.target.name]: event.target.value });
	};

	// Function to toggle edit mode
	const toggleEditMode = () => {
		setEditMode(!editMode);
	};

	// Function to save changes (replace with your actual data saving logic)
	const saveChanges = () => {
		// Implement logic to save updated user data
		console.log('Saving user data:', userData); // For demonstration purposes
		setEditMode(false); // Close edit mode after saving
	};

	return (
		<Layout header={'Profile'}>
			{editMode ? (
				<form>
					<TextField
						label='Name'
						name='name'
						value={userData.name}
						onChange={handleInputChange}
						fullWidth
						margin='normal'
					/>
					<TextField
						label='Email'
						name='email'
						type='email'
						value={userData.email}
						onChange={handleInputChange}
						fullWidth
						margin='normal'
					/>
					{/* Add TextField components for other user details here */}
					<Button variant='contained' type='button' onClick={saveChanges}>
						Save Changes
					</Button>
				</form>
			) : (
				<div>
					<Typography variant='body1'>Name: {userData.name}</Typography>
					<Typography variant='body1'>Email: {userData.email}</Typography>
					{/* Display other user details here */}
					<Button variant='outlined' type='button' onClick={toggleEditMode}>
						Edit Profile
					</Button>
				</div>
			)}
		</Layout>
	);
}

export default Profile;
