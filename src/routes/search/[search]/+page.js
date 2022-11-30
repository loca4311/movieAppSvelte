import { error } from '@sveltejs/kit';

// @ts-ignore
export async function load({ params }) {
	console.log(params);
	let api = `https://api.themoviedb.org/3/search/movie?api_key=2543806db591a0c6d5959cbb07944ca0&query=${params.search}&language=en-US&page=1&include_adult=true`;

	const res = await fetch(api);
	const data = await res.json();

	if (res.ok) {
		return data;
	}

	throw error(404, 'Not Found');
}
