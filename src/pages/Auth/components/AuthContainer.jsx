import FullPageLoader from '@/components/atoms/FullPageLoader/FullPageLoader';
import { useAuthStore } from '@/store';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContainer = ({ title, loading, children }) => {
	const navigate = useNavigate();
	const { isLoggedIn } = useAuthStore();

	useEffect(() => {
		if (isLoggedIn) navigate('/');
	}, [isLoggedIn, navigate]);

	return (
		<div className="bg-gray-100">
			{loading && <FullPageLoader />}
			<div className="container w-full min-h-screen flex items-center justify-center">
				<div className="max-w-screen-sm w-full bg-white shadow-md p-8 rounded-md space-y-5">
					{title && <div className="text-center text-3xl font-bold p-8"> {title}</div>}
					<hr />
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AuthContainer;
