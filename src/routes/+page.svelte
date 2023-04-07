<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		fetch('/api/crosswords', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
			// body: JSON.stringify({
			// 	email,
			// 	token,
			// 	from: 'footer'
			// })
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	});

	let data = {};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if data}
	<pre>{JSON.stringify(data, null, 2)}</pre>
{/if}
