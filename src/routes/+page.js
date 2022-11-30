import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	let api =
		'https://api.themoviedb.org/3/movie/popular?api_key=2543806db591a0c6d5959cbb07944ca0&language=en-US&page=1';
	const res = await fetch(api);
	const data = await res.json();
	if (res.ok) {
		return data;
	}
	throw error(404, 'Not found');
}
