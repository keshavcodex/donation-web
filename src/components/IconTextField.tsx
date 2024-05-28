import { useState } from 'react';
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function IconTextField(props: any) {
	const { label, value, setValue } = props;

	const [show, setShow] = useState(false);
	const handleChange = (event: any) => {
		setValue(event.target.value);
	};
	return (
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
	);
}

export default IconTextField;
