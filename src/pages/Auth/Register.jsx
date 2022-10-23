import { Button } from '@/components/atoms';
import { useAuthStore } from '@/store';
import React from 'react';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { Controller, useForm } from 'react-hook-form';
import { FiKey, FiMail, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import AuthContainer from './components/AuthContainer';
import GoogleLoginButton from './components/GoogleLoginButton';

export const Register = () => {
	const navigate = useNavigate();
	const alert = useAlert();
	const { control, handleSubmit } = useForm();

	const { loading } = useAuthStore();
	const { isLoggedIn, register } = useAuthStore();

	const onRegister = (values) =>
		register(values, (response) => {
			if (response.success) {
				alert.show('Registrasi berhasil, silakan login', { type: 'success' });
				navigate('/login');
			} else {
				alert.show(response.payload.message, { type: 'error' });
			}
		});

	useEffect(() => {
		if (isLoggedIn) navigate('/');
	}, [isLoggedIn, navigate]);

	return (
		<AuthContainer title="Register" loading={loading}>
			<div className="flex flex-col space-y-3">
				<div className="space-y-3 py-8">
					<Controller
						name="name"
						control={control}
						render={({ field }) => (
							<label className="flex items-center space-x-3 border rounded-md p-3" htmlFor={field.name}>
								<FiUser />
								<input
									className="ring-0 outline-0 border-0 focus:ring-0 px-0 py-0 w-full"
									id={field.name}
									placeholder="Name"
									type="text"
									{...field}
								/>
							</label>
						)}
					/>

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
					onClick={handleSubmit(onRegister)}
					disabled={loading}
				>
					Register
				</Button>
				<div className="text-right text-sm">
					Don't have any account yet?{' '}
					<Link to="/register" className="text-blue-500 hover:underline">
						Register here
					</Link>
				</div>
				<hr />
				<GoogleLoginButton disabled={loading} />
			</div>
		</AuthContainer>
	);
};
