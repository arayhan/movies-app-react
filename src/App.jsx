import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AppNav } from './components/organisms';
import { Auth, Login } from './pages/Auth/Login';
import { Home } from './pages/Home/Home';
import { MovieDetail } from './pages/MovieDetail/MovieDetail';
import { Search } from './pages/Search/Search';
import { useAuthStore } from './store';

function App() {
	function MainRoute() {
		return (
			<>
				<AppNav />
				<Outlet />
			</>
		);
	}

	function AuthenticationRoute() {
		const { isLoggedIn } = useAuthStore((state) => state);
		return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
	}

	function ProtectedRoute() {
		const { isLoggedIn } = useAuthStore((state) => state);
		return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
	}

	return (
		<div>
			<Routes>
				<Route path="/" element={<MainRoute />}>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/movie/:movieID" element={<MovieDetail />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/profile" element={<Home />} />
					</Route>
				</Route>

				<Route element={<AuthenticationRoute />}>
					<Route path="/login" element={<Login />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
