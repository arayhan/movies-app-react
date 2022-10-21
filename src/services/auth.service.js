import { getAuthConfig, http } from './http';

export const getMe = async (token) => {
	try {
		const response = await http.get(`/auth/me`, getAuthConfig(token));

		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};

export const login = async (request) => {
	try {
		const response = await http.post(`/auth/login`, request);

		return { success: true, payload: response.data };
	} catch (error) {
		return { success: false, payload: error.response.data };
	}
};

export const loginWithGoogle = async (accessToken) => {
	try {
		const data = { access_token: accessToken };
		const response = await http.post(`/auth/google`, data);

		return { success: true, payload: response.data };
	} catch (error) {
		return { success: false, payload: error.response.data };
	}
};
