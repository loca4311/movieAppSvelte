<script>
	import { fly } from 'svelte/transition';

	import PopularMovies from '../../../components/PopularMovies.svelte';

	export let data;
	export let searchResult = data.results;

	console.log(searchResult);
</script>

<section in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
	<PopularMovies popular={searchResult} />
</section>
