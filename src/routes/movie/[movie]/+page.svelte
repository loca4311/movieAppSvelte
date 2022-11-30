<script>
	import { fly } from 'svelte/transition';

	export let data;

	export let movieDetail = data;
</script>

<div
	class="movie-details"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<div class="img-contaier">
		<img
			src={'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path}
			alt={movieDetail.title}
		/>
	</div>
	<div class="text-container">
		<h1>{movieDetail.title}</h1>
		<p class="overview">
			{movieDetail.overview}
		</p>
		<p>
			<span>Release Date:</span>
			{movieDetail.release_date}<br />
			<span>Vote Average:</span>
			{movieDetail.vote_average}<br />
			<span>Budget:</span>
			{movieDetail.budget}<br />
			<span>Runtime:</span>
			{movieDetail.runtime}mins
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0 2rem;
	}

	p {
		padding: 1px 0rem;
	}

	.img-container {
		width: 100%;
	}

	img {
		width: 100%;
		border-radius: 1rem;
	}

	.movie-details {
		margin: 2rem 20%;
	}

	span {
		font-weight: bold;
	}
</style>
