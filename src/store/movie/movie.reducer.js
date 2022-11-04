import { createSlice } from '@reduxjs/toolkit';
import { SERVICE_MOVIE } from '@/services';

const initialState = {
	homeData: {
		bannerMovies: [],
		popularMovies: [],
	},
	searchResult: [],
	movieDetail: {},
	search: '',
	isLoading: false,
	isSubmitting: false,
	isSuccess: false,
};

const movieSlicer = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.search;
		},

		setLoading: (state, action) => {
			state.isLoading = action.isLoading;
		},

		getHomeData: async (state, action) => {
			state.isLoading = action.payload;

			const response = await Promise.all(SERVICE_MOVIE.getHomeBannerMovies(), SERVICE_MOVIE.getPopularMovies());

			console.log({ response });

			// const bannerMovies = await response[0];
			// const popularMovies = await response[1];

			// state.homeData.bannerMovies = action.payload.bannerMovies;
			// state.homeData.popularMovies = action.payload.popularMovies;
		},

		// getMoviesByTitle: async (query) => {
		// 	set({ isLoading: true });

		// 	const results = await getMoviesByTitle(query);

		// 	set({
		// 		searchResult: results.payload,
		// 		isLoading: false,
		// 	});
		// },

		// getMovieById: async (id) => {
		// 	set({ isLoading: true });

		// 	const results = await getMovieById(id);

		// 	set({
		// 		movieDetail: results.payload,
		// 		isSuccess: results.success,
		// 		isLoading: false,
		// 	});
		// },

		getAllTodosReducer: (state, action) => {
			state.todos = action.payload;
		},
	},
});

export const ACTION_MOVIE = movieSlicer.actions;
export default movieSlicer.reducer;
