import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
	profile: null,
	token: null,
	isLoading: false,
};

const authSlicer = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loadingReducer: (state, action) => {
			state.isLoading = action.payload;
		},
		whoAmIReducer: (state, action) => {
			state.profile = action.payload;
		},
		loginReducer: (state, action) => {
			state.isLoggedIn = action.payload.isLoggedIn;
			state.token = action.payload.token;
		},
		logoutReducer: (state) => {
			state.isLoggedIn = false;
			state.token = null;
		},
	},
});

export const { loadingReducer, whoAmIReducer, loginReducer, logoutReducer } = authSlicer.actions;
export default authSlicer.reducer;
