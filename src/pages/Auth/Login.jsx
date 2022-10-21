import { Button } from '@/components/atoms';
import { useAuthStore } from '@/store';
import React from 'react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiKey, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AuthContainer from './components/AuthContainer';

export const Login = () => {
	const navigate = useNavigate();
	const { control, handleSubmit } = useForm();

	const { isLoggedIn } = useAuthStore();

	const onLogin = (values) => {
		console.log({ values });
	};

	useEffect(() => {
		if (isLoggedIn) navigate('/');
	});

	return (
		<AuthContainer title="Login">
			<div className="flex flex-col space-y-3">
				<Controller
					name="email"
					control={control}
					render={({ field }) => (
						<label className="flex items-center space-x-3 border rounded-md p-3" htmlFor={field.name}>
							<FiMail />
							<input
								className="ring-0 outline-0 border-0 focus:ring-0 px-0 py-0"
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
								className="ring-0 outline-0 border-0 focus:ring-0 px-0 py-0"
								id={field.name}
								placeholder="Password"
								type="password"
								{...field}
							/>
						</label>
					)}
				/>

				<Button
					className="w-full px-6 py-3 text-center items-center justify-center"
					variant={'primary'}
					onClick={handleSubmit(onLogin)}
				>
					Login
				</Button>
			</div>
		</AuthContainer>
	);
};
