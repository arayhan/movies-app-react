import { SERVICE_MOVIE } from '@/services';
import {
	loadingReducer,
	searchReducer,
	homeDataReducer,
	getMovieByTitleReducer,
	movieDetailReducer,
} from './movie.reducer';

const setSearch = (search) => (dispatch) => {
	dispatch(searchReducer(search));
};

const getHomeData = () => async (dispatch) => {
	dispatch(loadingReducer(true));

	const bannerMovies = await SERVICE_MOVIE.getHomeBannerMovies();
	const popularMovies = await SERVICE_MOVIE.getPopularMovies();

	dispatch(homeDataReducer({ bannerMovies: bannerMovies.payload, popularMovies: popularMovies.payload }));
	dispatch(loadingReducer(false));
};

const getMoviesByTitle = (query) => async (dispatch) => {
	dispatch(loadingReducer(true));

	const results = await SERVICE_MOVIE.getMoviesByTitle(query);

	dispatch(getMovieByTitleReducer(results.payload));
	dispatch(loadingReducer(false));
};

const getMovieById = (id) => async (dispatch) => {
	dispatch(loadingReducer(true));

	const results = await SERVICE_MOVIE.getMovieById(id);

	dispatch(
		movieDetailReducer({
			movieDetail: results.payload,
			isSuccess: results.success,
		})
	);
	dispatch(loadingReducer(false));
};

export const ACTION_MOVIE = { setSearch, getHomeData, getMoviesByTitle, getMovieById };
