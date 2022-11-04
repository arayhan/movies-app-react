import { ACTION_MOVIE } from '@/store/actions';
import { getImageURL, queryStringToObject } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export const Search = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { searchResult, isLoading } = useSelector((state) => state.movie);
	const { getMoviesByTitle } = ACTION_MOVIE;

	const [queries, setQueries] = useState(null);

	useEffect(() => {
		if (location.search) {
			const queries = queryStringToObject(location.search);

			if (queries.query) dispatch(getMoviesByTitle(queries.query));

			setQueries(queries);
		}
	}, [dispatch, location, getMoviesByTitle]);

	return (
		<div>
			<div className="bg-gray-800">
				<div className="container pt-40 pb-32 text-white">
					<div className="text-4xl font-bold">Search</div>
					<div className="text-xl">Find your favorite movies here</div>
				</div>
			</div>
			<div className="bg-gray-200">
				<div className="container py-14 space-y-8">
					{queries && (
						<div>
							Search for : <span className="font-bold">{queries.query}</span>
						</div>
					)}

					{isLoading && <div>Loading...</div>}

					{!isLoading && searchResult.total_results === 0 && <div className="text-center">No results found</div>}

					{!isLoading && searchResult.total_results > 0 && (
						<div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
							{searchResult.results.map((movie) => (
								<Link key={movie.id} to={`/movie/${movie.id}`} className="rounded-xl overflow-hidden hover:opacity-80">
									<img className="w-full h-full object-cover" src={getImageURL(movie.poster_path)} alt="" />
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
