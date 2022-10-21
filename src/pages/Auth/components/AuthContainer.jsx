import React from 'react';

const AuthContainer = ({ children }) => {
	return (
		<div className="container w-full min-h-screen flex items-center justify-center bg-gray-100">
			<div className="">{children}</div>
		</div>
	);
};

export default AuthContainer;
