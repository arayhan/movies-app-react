import { createSlice } from '@reduxjs/toolkit';

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
		searchReducer: (state, action) => {
			state.search = action.payload;
		},

		loadingReducer: (state, action) => {
			state.isLoading = action.payload;
		},

		homeDataReducer: (state, action) => {
			state.homeData.bannerMovies = action.payload.bannerMovies;
			state.homeData.popularMovies = action.payload.popularMovies;
		},

		getMovieByTitleReducer: (state, action) => {
			state.searchResult = action.payload;
		},

		movieDetailReducer: (state, action) => {
			state.movieDetail = action.payload.movieDetail;
			state.isSuccess = action.payload.isSuccess;
		},
	},
});

export const { loadingReducer, searchReducer, homeDataReducer, getMovieByTitleReducer, movieDetailReducer } =
	movieSlicer.actions;
export default movieSlicer.reducer;
