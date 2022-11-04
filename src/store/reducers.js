import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth.reducer';
// import movieReducer from './movie/movie.reducer';

export default combineReducers({
	auth: authReducer,
	// movie: movieReducer,
});
