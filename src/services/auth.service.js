import { getAuthConfig, http } from './http';

const getMe = async (token) => {
	try {
		const response = await http.get(`/auth/me`, getAuthConfig(token));

		return { success: true, payload: response.data };
	} catch (e) {
		return { success: false, payload: e };
	}
};

const login = async (request) => {
	try {
		const response = await http.post(`/auth/login`, request);

		return { success: true, payload: response.data };
	} catch (error) {
		return { success: false, payload: error.response.data };
	}
};

const loginWithGoogle = async (accessToken) => {
	try {
		const data = { access_token: accessToken };
		const response = await http.post(`/auth/google`, data);

		return { success: true, payload: response.data };
	} catch (error) {
		return { success: false, payload: error.response.data };
	}
};

const register = async (request) => {
	try {
		const response = await http.post(`/auth/register`, request);

		return { success: true, payload: response.data };
	} catch (error) {
		return { success: false, payload: error.response.data };
	}
};

export const SERVICE_AUTH = { getMe, login, loginWithGoogle, register };
