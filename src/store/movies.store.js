import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { getHomeBannerMovies, getMoviesByTitle, getPopularMovies } from '@/services';

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

				setSearch: (search) => {
					set({ search });
				},

				getHomeData: async () => {
					set({ isLoading: true });

					const bannerMovies = await getHomeBannerMovies();
					const popularMovies = await getPopularMovies();

					set({
						homeData: { bannerMovies: bannerMovies.payload, popularMovies: popularMovies.payload },
						isLoading: false,
						isFetched: true,
					});
				},
				getMoviesByTitle: async (query) => {
					set({ isLoading: true });

					const results = await getMoviesByTitle(query);

					set({
						searchResult: results.payload,
						isLoading: false,
						isFetched: true,
					});
				},
				getMovieById: async () => {},
			}),
			{
				name: 'movie-store',
				getStorage: () => localStorage,
			}
		)
	)
);
