import { useAuthStore } from '@/store';
import React from 'react';

const Profile = () => {
	const { profile } = useAuthStore();

	return (
		<div>
			<section className="w-full pt-48 pb-36 bg-slate-800 text-white">
				<div className="container">
					<div className="text-4xl font-bold">Profile Page</div>
				</div>
			</section>
			<section>
				<div className="container py-20">
					<div className="grid grid-cols-12">
						<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">Name</div>
						<div className="col-span-7 md:col-span-9 px-8 py-2">{profile.name}</div>
						<div className="col-span-5 md:col-span-3 border-r border-gray-500 px-8 py-2 font-semibold">Email</div>
						<div className="col-span-7 md:col-span-9 px-8 py-2">{profile.email}</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
