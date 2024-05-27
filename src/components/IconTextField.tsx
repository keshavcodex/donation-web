import { useState } from 'react';
import {
	Box,
	createTheme,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	ThemeProvider
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import themeModal from '../theme/theme';

function IconTextField(props: any) {
	const { label, value, setValue } = props;

	const [show, setShow] = useState(false);
	const theme = themeModal();
	const colors = createTheme({
		palette: {
			primary: {
				main: theme.main,
				light: theme.light,
				dark: theme.dark,
				contrastText: '#C1AC05'
			}
		}
	});
	const handleChange = (event: any) => {
		setValue(event.target.value);
	};
	return (
		<ThemeProvider theme={colors}>
			<FormControl sx={{ my: 1, width: '100%' }} variant='outlined'>
				<InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
				<OutlinedInput
					id='outlined-adornment-password'
					type={show ? 'text' : 'password'}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={() => setShow(!show)}
								edge='end'
							>
								{show ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
					label={label}
					value={value}
					onChange={handleChange}
				/>
			</FormControl>
		</ThemeProvider>
	);
}

export default IconTextField;
