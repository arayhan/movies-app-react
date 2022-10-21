import { getMe, login, loginWithGoogle } from '@/services';
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

					if (success) set({ isLoggedIn: true, token: payload.token, error: null });
					else callback(payload.message);

					set({ loading: false });
				},
				loginWithGoogle: async (accessToken) => {
					const { whoAmI } = get();
					const { success, payload } = await loginWithGoogle(accessToken);

					if (success) {
						set({ isLoggedIn: true, token: payload.token, error: null });
						whoAmI();
					} else {
						set({ error: payload.message });
					}
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
