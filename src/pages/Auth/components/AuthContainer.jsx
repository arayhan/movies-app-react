import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';

const AuthContainer = ({ title, children }) => {
	return (
		<div className="container w-full min-h-screen flex items-center justify-center bg-gray-100">
			<div className="max-w-screen-sm w-full bg-white shadow-md p-8 rounded-md space-y-5">
				{title && <div className="text-center text-3xl font-bold p-8"> {title}</div>}
				<hr />
				<div>{children}</div>
				<hr />
				<GoogleLoginButton />
			</div>
		</div>
	);
};

export default AuthContainer;
