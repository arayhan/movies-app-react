import axios from 'axios';

export const API_KEY = '3274f36ad225b12bc1698d3954a8c765';
export const API_BASE_URL = 'https://challenge6-backend.herokuapp.com/api/v1/';
export const API_MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

export const getAuthConfig = (token) => {
	return { headers: { Authorization: `Bearer ${token}` } };
};

export const http = axios.create({ baseURL: API_BASE_URL });
export const httpMovieDB = axios.create({ baseURL: API_MOVIE_DB_BASE_URL });
