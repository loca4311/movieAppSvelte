<script>
	// @ts-nocheck

	export let movie;
</script>

<div class="movie-card">
	<a sveltekit:prefetch sveltekit:noscroll href={'/movie/' + movie.id}>
		<img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt={movie.title} />
	</a>
	<div class="description">
		<h3>{movie.title}</h3>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
		height: 30vh;
	}

	h3 {
		font-size: 0.9rem;
		margin-top: 0;
	}
	.description {
		height: 5vh;
	}

	p {
		font-size: 0.7rem;
	}

	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		font-size: 1rem;
	}
</style>
