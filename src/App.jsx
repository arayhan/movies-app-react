import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AppNav } from './components/organisms';
import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import { Home } from './pages/Home/Home';
import { MovieDetail } from './pages/MovieDetail/MovieDetail';
import Profile from './pages/Profile/Profile';
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
						<Route path="/profile" element={<Profile />} />
					</Route>
				</Route>

				<Route element={<AuthenticationRoute />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
