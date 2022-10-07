import { Route, Routes } from 'react-router-dom';
import { AppNav } from './components/organisms';
import { Home } from './pages/Home/Home';
import { MovieDetail } from './pages/MovieDetail/MovieDetail';
import { Search } from './pages/Search/Search';

function App() {
	return (
		<div>
			<AppNav />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/movie/:movieID" element={<MovieDetail />} />
			</Routes>
		</div>
	);
}

export default App;
