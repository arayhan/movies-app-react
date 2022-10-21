import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { FaGoogle } from 'react-icons/fa';
import { useAuthStore } from '@/store';
import { Button } from '@/components/atoms';

function GoogleLoginButton({ disabled }) {
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
		<Button
			onClick={handleLogin}
			disabled={disabled}
			variant="slate"
			leftIcon={<FaGoogle size={14} />}
			className={` text-white text-sm w-full flex items-center justify-center px-5 py-3 rounded-md space-x-3`}
		>
			Login or Register with Google
		</Button>
	);
}

export default GoogleLoginButton;
