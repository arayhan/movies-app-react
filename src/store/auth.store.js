import { getMe, login, register, loginWithGoogle } from '@/services';
import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export const useAuthStore = create(
	devtools(
		persist(
			(set, get) => ({
				isLoggedIn: false,
				profile: null,
				token: null,
				loading: false,

				whoAmI: async () => {
					const { token } = get();
					const { success, payload } = await getMe(token);

					if (success) set({ profile: payload });
				},
				login: async (request, callback) => {
					set({ loading: true });

					const { success, payload } = await login(request);

					if (success) {
						get().whoAmI();
						set({ isLoggedIn: true, token: payload.token });
					} else callback(payload.message);

					set({ loading: false });
				},
				register: async (request, callback) => {
					set({ loading: true });

					const response = await register(request);

					callback(response);

					set({ loading: false });
				},
				loginWithGoogle: async (accessToken) => {
					set({ loading: true });

					const { whoAmI } = get();
					const { success, payload } = await loginWithGoogle(accessToken);

					if (success) {
						set({ isLoggedIn: true, token: payload.token, error: null });
						whoAmI();
					} else {
						set({ error: payload.message });
					}

					set({ loading: false });
				},
				logout: () => {
					set({ isLoggedIn: false, token: null });
				},
			}),
			{
				name: 'auth-store',
				getStorage: () => localStorage,
			}
		)
	)
);
