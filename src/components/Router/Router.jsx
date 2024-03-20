import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Guard } from '../Guard/Guard';
import { UserProfile } from '../UserProfile/UserProfile';

export const Router = () => {
	const Layout = () => (
		<>
			<Header />
			<Outlet />;
			<Footer />
		</>
	);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						path="/"
						hydr
					></Route>
					<Route element={<Guard token="token" />}>
						<Route
							path="user/profile"
							element={<UserProfile />}
						></Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
