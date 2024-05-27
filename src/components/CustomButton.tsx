import { Button, createTheme, TextField, ThemeProvider, Typography } from '@mui/material';
import themeModal from '../theme/theme';

const CustomButton = ({
	children,
	onClick,
	color,
	textColor,
	variant
}: any) => {
	const theme = themeModal();
	const colors = createTheme({
		palette: {
			primary: {
				main: color || theme.main,
				light: theme.light,
				dark: theme.dark,
				contrastText: '#242105'
			}
		}
	});

	return (
		<ThemeProvider theme={colors}>
			<Button
				onClick={onClick}
				size='large'
				variant={variant || 'contained'}
				sx={{ color: theme.fullColor }}
			>
				<Typography color={textColor}>{children}</Typography>
			</Button>
		</ThemeProvider>
	);
};

export default CustomButton;
