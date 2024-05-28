import {
	Button,
	createTheme,
	TextField,
	ThemeProvider,
	Typography
} from '@mui/material';
import themeModal from '../theme/theme';

const CustomButton = ({
	children,
	onClick,
	color,
	textColor,
	variant
}: any) => {
	const theme = themeModal();
	return (
		<Button onClick={onClick} size='large' variant={variant || 'contained'}>
			<Typography color={textColor}>{children}</Typography>
		</Button>
	);
};

export default CustomButton;
