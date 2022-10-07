import { useMovieStore } from '@/store';
import { useEffect } from 'react';
import { HomeBanner } from './component/HomeBanner/HomeBanner';
import { HomePopularMovie } from './component/HomePopularMovie/HomePopularMovie';

const Home = () => {
	const { getHomeData } = useMovieStore();

	useEffect(() => {
		getHomeData();
	}, [getHomeData]);

	return (
		<div>
			<HomeBanner />
			<HomePopularMovie />
		</div>
	);
};

export default Home;
