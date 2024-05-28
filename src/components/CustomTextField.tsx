import { TextField } from '@mui/material';

const CustomTextField = ({ id, label, value, setValue }: any) => {

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
