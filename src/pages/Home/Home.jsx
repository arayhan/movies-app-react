import { HomeBanner } from './component/HomeBanner/HomeBanner';
import { HomePopularMovie } from './component/HomePopularMovie/HomePopularMovie';

const Home = () => {
	return (
		<div>
			<HomeBanner />
			<HomePopularMovie />
		</div>
	);
};

export default Home;
