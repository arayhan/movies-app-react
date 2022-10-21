import { Button } from '@/components/atoms';
import { useAuthStore } from '@/store';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

export const AppNav = () => {
	const navigate = useNavigate();
	const { profile, isLoggedIn, logout } = useAuthStore();
	const { handleSubmit, control } = useForm();

	const handleSearch = (value) => {
		navigate(`/search?query=${value.search}`);
	};

	return (
		<div className="z-20 fixed top-0 left-0 w-full">
			<div className="container text-white flex justify-between items-center py-5">
				<div>
					<Link to="/">
						<div className="text-xl lg:text-3xl font-bold">Movie List</div>
						<div className="text-xs">by Ahmed Rayhan Primadedas</div>
					</Link>
				</div>
				<div className="w-1/3">
					<form
						onSubmit={handleSubmit(handleSearch)}
						className="flex items-center border border-red-500 rounded-full px-3"
					>
						<Controller
							name="search"
							control={control}
							render={({ field: { name, onChange, value } }) => (
								<input
									name={name}
									className="bg-transparent border-0 focus:ring-0 w-full py-3"
									type="search"
									value={value}
									onChange={onChange}
									placeholder="What do you want to search?"
								/>
							)}
						/>

						<Button className="p-4" onClick={handleSubmit(handleSearch)}>
							<FiSearch className="text-red-500" />
						</Button>
					</form>
				</div>
				<div className="flex items-center space-x-3">
					{isLoggedIn && (
						<div className="flex items-center space-x-2">
							<Button className={'px-8 py-3 rounded-full'} variant="success" onClick={() => navigate('/profile')}>
								Hello, {profile.name}!
							</Button>
							<Button className={'px-8 py-3 rounded-full'} variant="danger" onClick={logout}>
								Logout
							</Button>
						</div>
					)}
					{!isLoggedIn && (
						<Button className={'px-8 py-3 rounded-full'} variant="primary" onClick={() => navigate('/login')}>
							Login / Register
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
