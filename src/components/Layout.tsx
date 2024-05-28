import { useEffect } from 'react';
import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'; // Assuming you're using Material UI for styling
import MenuAppBar from './MenuAppBar';
import { animated, useSpring } from '@react-spring/web';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../store/store';

function Layout({ header, children }: any) {
	const dispatch = useDispatch();

	const checkUserInLocal = () => {
		try {
			const user = localStorage.getItem('userInfo');
			if (user != null) dispatch(setUserInfo(JSON.parse(user || '')));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		checkUserInLocal();
		// eslint-disable-next-line
	}, []);

	const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);

	const colors = createTheme({
		palette: {
			primary: {
				main: isDarkMode ? '#282828' : '#117811',
				light: isDarkMode ? '#0d5c0d' : '#2f9e2f',
				dark: isDarkMode ? '#353535' : '#0d5c0d',
				contrastText: '#fff'
			}
		}
	});
	const gradientAnimation = useSpring({
		from: { backgroundPosition: '0% 50%' },
		to: { backgroundPosition: '100% 50%' },
		config: { duration: 3000 },
		loop: { reverse: true }
	});
	const gradientBackground = isDarkMode
		? `linear-gradient(to bottom right, #8cd4c0, #a3d4b2, #33cc66)`
		: `linear-gradient(to bottom right, #d3ffff, #92d79a, #33cc66)`;

	return (
		<ThemeProvider theme={colors}>
			<MenuAppBar header={header} />
			<animated.div
				style={{
					...gradientAnimation,
					backgroundImage: gradientBackground,
					backgroundSize: '100% 400%',
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh'
				}}
			>
				<Box sx={{ flex: 1 }}>{children}</Box>
				<Typography>this is footer</Typography>
			</animated.div>
		</ThemeProvider>
	);
}

export default Layout;
