import { Button } from '@/components/atoms';
import { ACTION_AUTH } from '@/store/actions';
import React from 'react';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { Controller, useForm } from 'react-hook-form';
import { FiKey, FiMail, FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthContainer from './components/AuthContainer';
import GoogleLoginButton from './components/GoogleLoginButton';

export const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const alert = useAlert();
	const { control, handleSubmit } = useForm();

	const { isLoggedIn, isLoading } = useSelector((state) => state.auth);
	const { handleRegister } = ACTION_AUTH;

	const onRegister = (values) => {
		dispatch(
			handleRegister(values, (response) => {
				if (response.success) {
					alert.show('Registrasi berhasil, silakan login', { type: 'success' });
					navigate('/login');
				} else {
					alert.show(response.payload.message, { type: 'error' });
				}
			})
		);
	};

	useEffect(() => {
		if (isLoggedIn) navigate('/');
	}, [isLoggedIn, navigate]);

	return (
		<AuthContainer title="Register" loading={isLoading}>
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
					disabled={isLoading}
				>
					Register
				</Button>
				<div className="text-right text-sm">
					Already have an account?{' '}
					<Link to="/login" className="text-blue-500 hover:underline">
						Login here
					</Link>
				</div>
				<hr />
				<GoogleLoginButton disabled={isLoading} />
			</div>
		</AuthContainer>
	);
};
