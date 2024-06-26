import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { userInfo: null, tempUserInfo: null },
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});
