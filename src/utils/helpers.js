export const getImageURL = (image) => {
	return `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image}`;
};

export const queryStringToObject = (queryString) => {
	const pairs = queryString.substring(1).split('&');

	const array = pairs.map((el) => {
		const parts = el.split('=');
		return parts;
	});

	return Object.fromEntries(array);
};
