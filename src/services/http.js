import axios from 'axios';

export const API_KEY = '3274f36ad225b12bc1698d3954a8c765';
export const API_BASE_URL = 'https://api.themoviedb.org/3';

export const http = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
