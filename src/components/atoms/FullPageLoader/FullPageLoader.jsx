import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const FullPageLoader = () => {
	return (
		<div className="fixed left-0 top-0 w-full h-screen flex flex-col items-center justify-center bg-black text-white bg-opacity-50 space-y-2">
			<BiLoaderAlt className="animate-spin" size={24} />
			<div>Loading...</div>
		</div>
	);
};

export default FullPageLoader;
