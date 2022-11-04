import { ACTION_MOVIE } from '@/store/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HomeBanner } from './component/HomeBanner/HomeBanner';
import { HomePopularMovie } from './component/HomePopularMovie/HomePopularMovie';

export const Home = () => {
	const dispatch = useDispatch();

	const { getHomeData } = ACTION_MOVIE;

	useEffect(() => {
		dispatch(getHomeData());
	}, [dispatch, getHomeData]);

	return (
		<div>
			<HomeBanner />
			<HomePopularMovie />
		</div>
	);
};
