import { createTheme, TextField, ThemeProvider } from '@mui/material';
import themeModal from '../theme/theme';

const CustomTextField = ({ id, label, value, setValue }: any) => {
	const theme = themeModal();

	const handleChange = (event: any) => {
		setValue(event.target.value);
	};

	return (
		<TextField
			sx={{
				fontFamily: 'monospace',
				my: 1
			}}
			id={id}
			label={label}
			value={value}
			onChange={handleChange}
			variant='outlined'
		/>
	);
};

export default CustomTextField;
