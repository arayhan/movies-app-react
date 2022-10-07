import { Button } from '@/components/atoms';
import { useMovieStore } from '@/store';
import { getImageURL } from '@/utils/helpers';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import './HomeBanner.css';

export const HomeBanner = () => {
	const navigate = useNavigate();
	const { homeData } = useMovieStore();

	const bannerMovies = homeData.bannerMovies ? homeData.bannerMovies.results.filter((movie, index) => index < 7) : [];

	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	console.log({ bannerMovies });

	return (
		<div className="relative">
			<Slider {...settings}>
				{bannerMovies?.map((movie) => (
					<div key={movie.id}>
						<div className="relative py-40 flex items-center" style={{ height: 800, maxHeight: 800 }}>
							<div className="absolute left-0 top-0 w-full h-full" style={{ height: 800, maxHeight: 800 }}>
								<img className="w-full h-full object-cover" src={getImageURL(movie.backdrop_path)} alt="" />
								<div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50" />
							</div>
							<div className="relative container">
								<div className="text-white space-y-3 lg:w-1/2">
									<h1 className="text-5xl font-bold leading-tight">{movie.original_title}</h1>
									<div>{movie.overview}</div>
									<Button
										onClick={() => navigate(`/movie/${movie.id}`)}
										className="px-8 py-3 rounded-full"
										variant="primary"
									>
										See Detail
									</Button>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};
