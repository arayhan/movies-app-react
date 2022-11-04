import { getImageURL } from '@/utils/helpers';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '@/components/atoms';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { ACTION_MOVIE } from '@/store/actions';

export const MovieDetail = () => {
	const { movieID } = useParams();
	const { movieDetail, isLoading, isSuccess } = useSelector((state) => state.movie);
	const { getMovieById } = ACTION_MOVIE;

	useEffect(() => {
		getMovieById(movieID);
	}, [movieID, getMovieById]);

	return (
		<div>
			{isLoading && (
				<div className="bg-gray-800 text-white">
					<Loader className={'container py-80'} />
				</div>
			)}

			{!isLoading && !isSuccess && (
				<div className="bg-gray-800 text-white min-h-screen flex items-center text-center">
					<div className="container space-y-4">
						<h1 className="text-8xl font-bold">404</h1>
						<h1 className="text-4xl font-bold">Movie not found</h1>
						<div>{movieDetail.message}</div>
					</div>
				</div>
			)}

			{!isLoading && isSuccess && (
				<div className="relative">
					<div>
						<div className="relative py-40 flex items-center" style={{ height: 500, maxHeight: 500 }}>
							<div className="absolute left-0 top-0 w-full h-full" style={{ height: 500, maxHeight: 500 }}>
								<img className="w-full h-full object-cover" src={getImageURL(movieDetail.backdrop_path)} alt="" />
								<div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50" />
							</div>
							<div className="relative container">
								<div className="text-white space-y-3 lg:w-1/2">
									<h1 className="text-5xl font-bold leading-tight">{movieDetail.original_title}</h1>
									<div>{movieDetail.overview}</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gray-200">
						<div className="container mx-auto px-4 py-16">
							<div className="grid grid-cols-12">
								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">
									For Adult
								</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2">{movieDetail.adult ? 'Yes' : 'No'}</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">Genres</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2 flex flex-wrap gap-2 items-start">
									{movieDetail.genres.map((genre) => (
										<span key={genre.id} className="bg-white shadow-sm1 rounded-full px-4 py-1">
											{genre.name}
										</span>
									))}
								</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">
									Original Language
								</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2">{movieDetail.original_language}</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">
									Popularity
								</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2">{movieDetail.popularity} / 5</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">
									Production Companies
								</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2 flex flex-wrap gap-2 items-start">
									{movieDetail.production_companies.map((company) => (
										<span key={company.id} className="bg-white shadow-sm1 rounded-full px-4 py-1">
											{company.name}
										</span>
									))}
								</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">
									Production Countries
								</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2 flex flex-wrap gap-2 items-start">
									{movieDetail.production_countries.map((country) => (
										<span key={country.id} className="bg-white shadow-sm1 rounded-full px-4 py-1">
											{country.name}
										</span>
									))}
								</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">
									Release Date
								</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2">
									{moment(movieDetail.release_date).format('dddd, DD MMMM yyyy')} ({movieDetail.status})
								</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">Revenue</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2">{movieDetail.revenue}</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">Runtime</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2">{movieDetail.runtime}</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">
									Spoken Languages
								</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2 flex flex-wrap gap-2 items-start">
									{movieDetail.spoken_languages.map((language) => (
										<span key={language.id} className="bg-white shadow-sm1 rounded-full px-4 py-1">
											{language.name}
										</span>
									))}
								</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">
									Vote Average
								</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2">{movieDetail.vote_average}</div>

								<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">
									Vote Count
								</div>
								<div className="col-span-7 md:col-span-9 px-8 py-2">{movieDetail.vote_count}</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
