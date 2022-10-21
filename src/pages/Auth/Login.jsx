import { Button } from '@/components/atoms';
import { useAuthStore } from '@/store';
import React from 'react';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { Controller, useForm } from 'react-hook-form';
import { FiKey, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AuthContainer from './components/AuthContainer';
import GoogleLoginButton from './components/GoogleLoginButton';

export const Login = () => {
	const navigate = useNavigate();
	const alert = useAlert();
	const { control, handleSubmit } = useForm();

	const { loading } = useAuthStore();
	const { isLoggedIn, login } = useAuthStore();

	const onLogin = (values) => login(values, (error) => alert.show(error, { type: 'error' }));

	useEffect(() => {
		if (isLoggedIn) navigate('/');
	}, [isLoggedIn, navigate]);

	return (
		<AuthContainer title="Login">
			<div className="flex flex-col space-y-3">
				<div className="space-y-3 py-8">
					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<label className="flex items-center space-x-3 border rounded-md p-3" htmlFor={field.name}>
								<FiMail />
								<input
									className="ring-0 outline-0 border-0 focus:ring-0 px-0 py-0 w-full"
									id={field.name}
									placeholder="Email"
									type="email"
									{...field}
								/>
							</label>
						)}
					/>

					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<label className="flex items-center space-x-3 border rounded-md p-3" htmlFor={field.name}>
								<FiKey />
								<input
									className="ring-0 outline-0 border-0 focus:ring-0 px-0 py-0 w-full"
									id={field.name}
									placeholder="Password"
									type="password"
									{...field}
								/>
							</label>
						)}
					/>
				</div>

				<Button
					className="w-full px-6 py-3 text-center items-center justify-center"
					variant={'primary'}
					onClick={handleSubmit(onLogin)}
					disabled={loading}
				>
					Login
				</Button>
				<hr />
				<GoogleLoginButton disabled={loading} />
			</div>
		</AuthContainer>
	);
};
