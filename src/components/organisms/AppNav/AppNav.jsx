import { Button } from '@/components/atoms';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

export const AppNav = () => {
	return (
		<div className="fixed top-0 left-0 w-full">
			<div className="container text-white flex justify-between items-center py-5">
				<div>
					<div>
						<div className="text-xl font-bold">Movie List</div>
						<div className="text-xs">by Ahmed Rayhan Primadedas</div>
					</div>
				</div>
				<div className="w-1/3">
					<div className="flex items-center border border-red-500 rounded-full px-3">
						<input
							className="bg-transparent border-0 focus:ring-0 w-full"
							type="search"
							placeholder="What do you want to search?"
						/>
						<div className="p-4">
							<FiSearch className="text-red-500" />
						</div>
					</div>
				</div>
				<div>
					<Button className={'px-8 py-3'} variant="primary">
						Register
					</Button>
				</div>
			</div>
		</div>
	);
};
