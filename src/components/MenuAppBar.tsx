import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LightMode, DarkMode } from '@mui/icons-material';

import { logout, toggleDarkMode } from '../store/store';

export default function MenuAppBar({ header }: any) {
	const isAuthenticated = useSelector((state: any) => state.user.userInfo);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentPath = useLocation().pathname;

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [dark, setDark] = useState(true);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		try {
			localStorage.removeItem('userInfo');
			dispatch(logout());
			navigate('/');
		} catch (error) {
			console.log('Failed to logout');
		}
	};
	const toggleMode = () => {
		setDark(!dark);
		dispatch(toggleDarkMode());
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='sticky'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					{currentPath !== '/' && (
						<MenuItem onClick={() => navigate('/')}>Home</MenuItem>
					)}
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						{header || 'Wildlife Conservation'}
					</Typography>
					<Box mx={2} onClick={toggleMode}>
						{dark ? <LightMode /> : <DarkMode />}
					</Box>
					{isAuthenticated ? (
						<Box>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'
							>
								<AccountCircle />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={() => navigate('/profile')}>
									Profile
								</MenuItem>
								<MenuItem onClick={handleLogout}>Logout</MenuItem>
							</Menu>
						</Box>
					) : (
						<Box>
							<Typography
								onClick={() => navigate('/login')}
								variant='h6'
								component='div'
								sx={{ flexGrow: 1 }}
							>
								Login
							</Typography>
						</Box>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
