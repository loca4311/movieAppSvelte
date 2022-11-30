<script>
	// import { onMount } from 'svelte';

	// onMount(async () => {
	// 	const moviesApi =
	// 		'https://api.themoviedb.org/3/movie/popular?api_key=2543806db591a0c6d5959cbb07944ca0&language=en-US&page=1';

	// 	const res = await fetch(moviesApi);
	// 	const data = await res.json();
	// 	const popular = data.results;
	// 	console.log(popular);
	// });
	import { fly } from 'svelte/transition';

	import SearchMovies from '../components/SearchMovies.svelte';
	import PopularMovies from '../components/PopularMovies.svelte';

	export let data;
	export let popular = data.results;
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovies />
	<PopularMovies {popular} />
</section>
