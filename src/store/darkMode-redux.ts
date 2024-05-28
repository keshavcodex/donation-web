import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isDarkMode: true
};

export const darkModeSlice = createSlice({
	name: 'darkMode',
	initialState,
	reducers: {
		toggleDarkMode(state) {
			console.log(state.isDarkMode ? 'dark-mode' : 'light-mode');
			state.isDarkMode = !state.isDarkMode;
		}
	}
});
