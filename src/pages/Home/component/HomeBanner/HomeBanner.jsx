import { Button } from '@/components/atoms';
import React from 'react';
import Slider from 'react-slick';

import './HomeBanner.css';

export const HomeBanner = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="relative">
			<Slider {...settings}>
				<div className="relative py-40" style={{ height: 800, maxHeight: 800 }}>
					<div className="absolute left-0 top-0 w-full h-full">
						<img
							className="w-full h-full object-cover"
							src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
							alt=""
						/>
						<div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50" />
					</div>
					<div className="relative container">
						<div className="text-white space-y-3 lg:w-1/2">
							<h1 className="text-5xl font-bold leading-tight">Spider-Man: No Way Home (2021)</h1>
							<div>
								Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a
								super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him
								to discover what it truly means to be Spider-Man.
							</div>
							<Button className="px-8 py-3 rounded-full" variant="primary">
								Watch Trailer
							</Button>
						</div>
					</div>
				</div>
				<div className="relative py-40" style={{ height: 800, maxHeight: 800 }}>
					<div className="absolute left-0 top-0 w-full h-full">
						<img
							className="w-full h-full object-cover"
							src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
							alt=""
						/>
						<div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50" />
					</div>
					<div className="relative container">
						<div className="text-white space-y-3 lg:w-1/2">
							<h1 className="text-5xl font-bold leading-tight">Spider-Man: No Way Home (2021)</h1>
							<div>
								Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a
								super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him
								to discover what it truly means to be Spider-Man.
							</div>
							<Button className="px-8 py-3 rounded-full" variant="primary">
								Watch Trailer
							</Button>
						</div>
					</div>
				</div>
				<div className="relative py-40" style={{ height: 800, maxHeight: 800 }}>
					<div className="absolute left-0 top-0 w-full h-full">
						<img
							className="w-full h-full object-cover"
							src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
							alt=""
						/>
						<div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50" />
					</div>
					<div className="relative container">
						<div className="text-white space-y-3 lg:w-1/2">
							<h1 className="text-5xl font-bold leading-tight">Spider-Man: No Way Home (2021)</h1>
							<div>
								Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a
								super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him
								to discover what it truly means to be Spider-Man.
							</div>
							<Button className="px-8 py-3 rounded-full" variant="primary">
								Watch Trailer
							</Button>
						</div>
					</div>
				</div>
			</Slider>
		</div>
	);
};
