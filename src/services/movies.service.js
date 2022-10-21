import { httpMovieDB as http, API_KEY } from './http';

export const getHomeBannerMovies = async () => {
	try {
		const response = await http.get(
			`/discover/movie?primary_release_year=2021&sort_by=vote_average.desc=&api_key=${API_KEY}`
		);
		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};

export const getPopularMovies = async () => {
	try {
		const response = await http.get(`/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};

export const getMoviesByTitle = async (query, page = 1) => {
	try {
		const response = await http.get(`/search/movie?query=${query}&page=${page}&api_key=${API_KEY}`);
		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};

export const getMovieById = async (id) => {
	try {
		const response = await http.get(`/movie/${id}?&api_key=${API_KEY}`);
		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};
