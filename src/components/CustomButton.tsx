import {
	Button,
	Typography
} from '@mui/material';

const CustomButton = ({
	children,
	onClick,
	textColor,
	variant
}: any) => {
	return (
		<Button onClick={onClick} size='large' variant={variant || 'contained'}>
			<Typography color={textColor}>{children}</Typography>
		</Button>
	);
};

export default CustomButton;
