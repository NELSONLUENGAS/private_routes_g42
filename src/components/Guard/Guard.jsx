import { Navigate, Outlet } from 'react-router-dom';

export const Guard = ({ token, redirectTo = 'login', children }) => {
	if (!token) {
		return <Navigate to={redirectTo} />;
	}
	return children ? children : <Outlet />;
};
