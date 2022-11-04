import { SERVICE_AUTH } from '@/services';
import { loadingReducer, whoAmIReducer, loginReducer, logoutReducer } from './auth.reducer';

const whoAmI = (token) => async (dispatch) => {
	const { success, payload } = await SERVICE_AUTH.getMe(token);
	if (success) dispatch(whoAmIReducer(payload));
};

const handleLogin = (request, callback) => async (dispatch) => {
	dispatch(loadingReducer(true));
	const { success, payload } = await SERVICE_AUTH.login(request);

	if (success) {
		loginReducer({ isLoggedIn: true, token: payload.token });
		whoAmI(payload.token);
	} else callback(payload.message);
	dispatch(loadingReducer(false));
};

const handleLoginWithGoogle = (accessToken, callback) => async (dispatch) => {
	dispatch(loadingReducer(true));

	const { success, payload } = await SERVICE_AUTH.loginWithGoogle(accessToken);

	if (success) {
		dispatch(loginReducer({ isLoggedIn: true, token: payload.token }));
		await dispatch(whoAmI(payload.token));
	} else callback(payload.message);

	dispatch(loadingReducer(false));
};

const handleRegister = (request, callback) => async (dispatch) => {
	dispatch(loadingReducer(true));
	const response = await SERVICE_AUTH.register(request);
	callback(response);
	dispatch(loadingReducer(false));
};

const handleLogout = () => (dispatch) => {
	dispatch(logoutReducer());
};

export const ACTION_AUTH = { handleLogin, handleLoginWithGoogle, handleRegister, handleLogout };
