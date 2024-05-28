import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { Button, Typography, Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import CustomTextField from '../components/CustomTextField';
import userAvatar from '../images/user-avatar.png';
import { editUser } from '../services/authApi';
import { useNavigate } from 'react-router-dom';

function Profile() {
	const [editMode, setEditMode] = useState(false);
	const navigate = useNavigate();

	const userInfo = useSelector((state: any) => state?.user?.userInfo);
	const isLoading = userInfo === null;

	const [firstName, setFirstName] = useState(userInfo?.firstName);
	const [lastName, setLastName] = useState(userInfo?.lastName);
	const [email, setEmail] = useState(userInfo?.email);
	const [phone, setPhone] = useState(userInfo?.phone);

	useEffect(() => {
		if (!isLoading && userInfo) {
			setFirstName(userInfo.firstName);
			setLastName(userInfo.lastName);
			setEmail(userInfo.email);
			setPhone(userInfo.phone);
		}
	}, [isLoading, userInfo]); // Dependency array ensures updates only when necessary

	// Function to save changes (replace with your actual data saving logic)
	const saveChanges = async () => {
		// Implement logic to save updated user data
		const editedUser = {
			firstName,
			lastName,
			email,
			phone,
			password: 'asdfasdf'
		};

		try {
			const response = await editUser(userInfo.id, editedUser);
			console.log('response of edit profile', response);
			setEditMode(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout header={editMode ? 'Edit profile' : 'Profile'}>
			{editMode ? (
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
						{/* <Typography sx={{ fontFamily: 'monospace', fontSize: 20 }}>
							Edit profile
						</Typography> */}
						<img
							src={userAvatar}
							alt='User avatar'
							style={{
								width: '100px',
								borderRadius: '50%',
								alignSelf: 'center'
							}}
						/>
						<Stack direction={'row'} gap={1}>
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
						{/* Add TextField components for other user details here */}
						<Button variant='contained' type='button' onClick={saveChanges}>
							Save Changes
						</Button>
					</Box>
				</Box>
			) : (
				<Box mt={2}>
					<img
						src={userAvatar}
						alt='User avatar'
						style={{
							width: '100px',
							borderRadius: '50%',
							alignSelf: 'center'
						}}
					/>
					<Typography variant='h4' my={2}>
						{firstName + ' ' + lastName}
					</Typography>
					<Typography variant='body1' my={2}>
						{email}
					</Typography>
					<Typography variant='body1' my={2}>
						{phone}
					</Typography>

					<Button
						variant='outlined'
						type='button'
						onClick={() => navigate('edit')}
					>
						Edit Profile
					</Button>
				</Box>
			)}
		</Layout>
	);
}

export default Profile;
