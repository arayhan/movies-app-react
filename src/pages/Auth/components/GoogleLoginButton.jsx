import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { FaGoogle } from 'react-icons/fa';
import { useAuthStore } from '@/store';

function GoogleLoginButton() {
	const { loginWithGoogle } = useAuthStore();

	const handleLogin = useGoogleLogin({
		onSuccess: async (response) => {
			const accessToken = response.access_token;
			loginWithGoogle(accessToken);
		},
		onError: (error) => {
			alert(error);
		},
	});

	return (
		<button
			onClick={handleLogin}
			className="bg-slate-800 hover:bg-slate-700 text-white w-full flex items-center justify-center px-5 py-3 rounded-md space-x-3"
		>
			<FaGoogle size={14} /> <span className="text-sm"> Login or Register with Google</span>
		</button>
	);
}

export default GoogleLoginButton;
