import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { FaGoogle } from 'react-icons/fa';
import { Button } from '@/components/atoms';
import { ACTION_AUTH } from '@/store/auth/auth.actions';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

function GoogleLoginButton({ disabled }) {
	const dispatch = useDispatch();
	const alert = useAlert();

	const { handleLoginWithGoogle } = ACTION_AUTH;

	const onLogin = useGoogleLogin({
		onSuccess: (response) => {
			const accessToken = response.access_token;
			dispatch(handleLoginWithGoogle(accessToken, (error) => alert.show(error, { type: 'error' })));
		},
		onError: (error) => {
			alert(error);
		},
	});

	return (
		<Button
			onClick={onLogin}
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
