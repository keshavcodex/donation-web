import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user-redux';
import { darkModeSlice } from './darkMode-redux';

const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		darkMode: darkModeSlice.reducer
	}
});

export const setUserInfo = (body: any) =>
	store.dispatch(userSlice.actions.setUserInfo(body));

export const logout = () => store.dispatch(userSlice.actions.setUserInfo(null));

export const toggleDarkMode = () => darkModeSlice.actions.toggleDarkMode();

export default store;
