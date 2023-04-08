<script lang="ts">
	import Crosswords from '$lib/components/Crosswords.svelte';
	import { example1 } from '$lib/crosswords';
	import ChatScheduler from '../lib/components/ChatScheduler.svelte';
	import { onMount } from 'svelte';

	// onMount(() => {
	// 	fetch('/api/crosswords', {
	// 		method: 'POST',
	// 		headers: {
	// 			'content-type': 'application/json'
	// 		}
	// 		// body: JSON.stringify({
	// 		// 	email,
	// 		// 	token,
	// 		// 	from: 'footer'
	// 		// })
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 		});
	// });
</script>

<main>
	<ChatScheduler />
	<Crosswords data={example1} />
</main>

<style>
	:global(body) {
		background: #000;
	}

	main {
		width: 500px;
		margin: 50px auto;
	}
</style>
