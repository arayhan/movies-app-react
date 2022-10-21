import { useAuthStore } from '@/store';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContainer from './components/AuthContainer';
import GoogleLoginButton from './components/GoogleLoginButton';

export const Auth = () => {
	const navigate = useNavigate();
	const { isLoggedIn } = useAuthStore();

	useEffect(() => {
		if (isLoggedIn) navigate('/');
	});

	return (
		<AuthContainer>
			<GoogleLoginButton />
		</AuthContainer>
	);
};
