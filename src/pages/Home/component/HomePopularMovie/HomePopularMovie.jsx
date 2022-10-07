import React from 'react';
import { Link } from 'react-router-dom';

export const HomePopularMovie = () => {
	return (
		<div className="bg-gray-200 py-20">
			<div className="container space-y-8">
				<div>
					<div className="text-3xl font-bold">Popular Movies</div>
				</div>
				<div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
					<Link to="/" className="rounded-xl overflow-hidden hover:opacity-80">
						<img
							className="w-full h-full object-cover"
							src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
							alt=""
						/>
					</Link>
					<Link to="/" className="rounded-xl overflow-hidden hover:opacity-80">
						<img
							className="w-full h-full object-cover"
							src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
							alt=""
						/>
					</Link>
					<Link to="/" className="rounded-xl overflow-hidden hover:opacity-80">
						<img
							className="w-full h-full object-cover"
							src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
							alt=""
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
