import { Route, Routes } from 'react-router-dom';
import { AppNav } from './components/organisms';
import { Home } from './pages/Home/Home';
import { Search } from './pages/Search/Search';

function App() {
	return (
		<div>
			<AppNav />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</div>
	);
}

export default App;
