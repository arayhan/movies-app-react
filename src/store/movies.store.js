import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { getHomeBannerMovies, getPopularMovies } from '@/services';

export const useMovieStore = create(
	devtools(
		persist(
			(set, get) => ({
				homeData: {
					bannerMovies: [],
					popularMovies: [],
				},
				searchResult: [],
				movieDetail: {},
				search: '',
				isLoading: false,
				isSubmitting: false,
				isFetched: false,

				setSearch: (search) => {
					set({ search });
				},

				getHomeData: async () => {
					if (!get().isFetched) {
						set({ isLoading: true });
					}

					const bannerMovies = await getHomeBannerMovies();
					const popularMovies = await getPopularMovies();

					set({
						homeData: { bannerMovies: bannerMovies.payload, popularMovies: popularMovies.payload },
						isLoading: false,
						isFetched: true,
					});
				},
				getPopularMovies: async () => {},
				getMoviesByTitle: async () => {},
				getMovieById: async () => {},
			}),
			{
				name: 'movie-store',
				getStorage: () => localStorage,
			}
		)
	)
);
