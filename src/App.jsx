import { Route, Routes } from 'react-router-dom';
import { AppNav } from './components/organisms';
import Home from './pages/Home/Home';

function App() {
	return (
		<div>
			<AppNav />

			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
