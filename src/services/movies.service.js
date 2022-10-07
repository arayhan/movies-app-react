import { http, API_KEY } from './http';

export const getMovies = async () => {
	try {
		const response = await http.get(`?api_key=${API_KEY}`);
		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};
