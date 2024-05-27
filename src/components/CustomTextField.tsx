import { createTheme, TextField, ThemeProvider } from '@mui/material';
import themeModal from '../theme/theme';

const CustomTextField = ({ label, value, setValue }: any) => {
	const theme = themeModal();
	const colors = createTheme({
		palette: {
			primary: {
				main: theme.main,
				light: theme.light,
				dark: theme.dark,
				contrastText: '#242105'
			}
		}
	});

	const handleChange = (event: any) => {
		setValue(event.target.value);
	};

	return (
		<ThemeProvider theme={colors}>
			<TextField
				sx={{
					fontFamily: 'monospace',
					my: 1
				}}
				id='standard-basic'
				label={label}
				value={value}
				onChange={handleChange}
				variant='outlined'
			/>
		</ThemeProvider>
	);
};

export default CustomTextField;
