<script>
	import MovieCard from './MovieCard.svelte';

	/**
	 * @type {any[]}
	 */
	export let popular;

	console.log(popular[0]);
</script>

<div class="popular-movies">
	{#each popular as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h2 {
		padding: 0 1rem;
	}

	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}
</style>
