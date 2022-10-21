import { getMe, loginWithGoogle } from '@/services';
import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export const useAuthStore = create(
	devtools(
		persist(
			(set, get) => ({
				isLoggedIn: false,
				profile: null,
				token: null,

				whoAmI: async () => {
					const { token } = get();
					const { success, payload } = await getMe(token);

					if (success) set({ profile: payload });
				},
				loginWithGoogle: async (accessToken) => {
					const { whoAmI } = get();
					const { success, payload } = await loginWithGoogle(accessToken);

					if (success) set({ isLoggedIn: true, token: payload.token });

					whoAmI();
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
