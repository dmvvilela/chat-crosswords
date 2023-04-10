<script lang="ts">
	// @ts-ignore
	import Crossword from 'svelte-crossword';
	import { onMount } from 'svelte';
	import { generateCrosswordsPuzzle } from '$lib/crosswords';

	export let data: TCrosswordsData[];

	let puzzle: TCrosswords[];

	type TCrosswordsData = {
		clue: string;
		answer: string;
	};

	type TCrosswords = {
		clue: string;
		answer: string;
		direction: 'down' | 'across';
		x: number;
		y: number;
	};

	onMount(() => {
		puzzle = generateCrosswordsPuzzle(data);
		console.log(data, puzzle);
	});
</script>

{#if puzzle}
	<Crossword data={puzzle} />
{/if}
