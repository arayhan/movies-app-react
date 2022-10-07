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

					const movies = await Promise.all[(getHomeBannerMovies(), getPopularMovies())];

					set({
						homeData: { bannerMovies: movies[0].payload, popularMovies: movies[1].payload },
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
