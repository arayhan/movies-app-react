import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth.reducer';
import movieReducer from './movie/movie.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],
};

const rootReducer = combineReducers({
	auth: authReducer,
	movie: movieReducer,
});

export default persistReducer(persistConfig, rootReducer);
