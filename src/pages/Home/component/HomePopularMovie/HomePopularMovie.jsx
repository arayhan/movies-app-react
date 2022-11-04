import { useMovieStore } from '@/store/store';
import { getImageURL } from '@/utils/helpers';
import React from 'react';
import { Link } from 'react-router-dom';

export const HomePopularMovie = () => {
	const { homeData, isLoading } = useMovieStore();

	return (
		<div className="bg-gray-200 py-20">
			<div className="container space-y-8">
				<div>
					<div className="text-3xl font-bold">Popular Movies</div>
				</div>
				{isLoading && <div>Loading...</div>}

				{!isLoading && (
					<div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
						{homeData.popularMovies?.results?.map((movie) => (
							<Link key={movie.id} to={`/movie/${movie.id}`} className="rounded-xl overflow-hidden hover:opacity-80">
								<img className="w-full h-full object-cover" src={getImageURL(movie.poster_path)} alt="" />
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
