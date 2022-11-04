import { Button } from '@/components/atoms';
import React from 'react';
import { useAlert } from 'react-alert';
import { Controller, useForm } from 'react-hook-form';
import { FiKey, FiMail } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ACTION_AUTH } from '@/store/actions';
import AuthContainer from './components/AuthContainer';
import GoogleLoginButton from './components/GoogleLoginButton';

export const Login = () => {
	const dispatch = useDispatch();
	const alert = useAlert();

	const { control, handleSubmit } = useForm();

	const { handleLogin } = ACTION_AUTH;
	const { isLoading } = useSelector((state) => state.auth);

	const onLogin = (values) => {
		dispatch(handleLogin(values, (error) => alert.show(error, { type: 'error' })));
	};

	return (
		<AuthContainer title="Login" loading={isLoading}>
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
					disabled={isLoading}
				>
					Login
				</Button>
				<div className="text-right text-sm">
					Don't have any account yet?{' '}
					<Link to="/register" className="text-blue-500 hover:underline">
						Register here
					</Link>
				</div>
				<hr />
				<GoogleLoginButton disabled={isLoading} />
			</div>
		</AuthContainer>
	);
};
