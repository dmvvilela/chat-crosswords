<script lang="ts">
	import Crosswords from '$lib/components/Crosswords.svelte';
	import UserPrompt from '$lib/components/UserPrompt.svelte';
	import { example1 } from '$lib/crosswords';
	import { fly } from 'svelte/transition';
	import ChatScheduler from '../lib/components/ChatScheduler.svelte';

	let showExample = false;
	let gamePlayed = false;
	let userPrompted = false;
	let crosswordsData: any[];

	$: prompt = '';

	let data = [
		{
			text: 'Cool idea!',
			who: 'them'
		},
		{
			text: 'Building your puzzle... Just one sec!',
			who: 'them'
		},
		{
			text: "Ok, thanks! I'll wait...",
			who: 'you'
		},
		{
			text: 'Thank you for playing!',
			who: 'them'
		}
	];

	function onCompleted(event: any) {
		const { isComplete } = event.detail;
		if (isComplete) {
			gamePlayed = true;
		}
	}

	function generatePuzzle() {
		data.unshift({
			text: prompt,
			who: 'you'
		});
		userPrompted = true;

		fetch('/api/crosswords', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				userPrompt: prompt
			})
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(JSON.parse(data.crosswords));
				crosswordsData = JSON.parse(data.crosswords).map((crossword: any) => {
					return {
						clue: crossword.clue,
						answer: crossword.answer.replaceAll(' ', '')
					};
				});
			});
	}
</script>

<main>
	<ChatScheduler on:final={() => (showExample = true)} />
	{#if showExample}
		<div in:fly={{ y: 50, opacity: 0, duration: 250, delay: 2500 }}>
			<Crosswords data={example1} />
		</div>
	{/if}
	{#if userPrompted}
		<div in:fly={{ y: 50, opacity: 0, duration: 250 }} class="mt-8">
			<ChatScheduler {data} on:final={() => (showExample = true)} />
		</div>
	{/if}
	{#if crosswordsData}
		<div in:fly={{ y: 50, opacity: 0, duration: 250 }}>
			<Crosswords data={crosswordsData} on:completed={onCompleted} />
		</div>
	{/if}
	{#if showExample}
		<div in:fly={{ y: 50, opacity: 0, duration: 250, delay: 3000 }}>
			<UserPrompt bind:prompt onClick={generatePuzzle} />
		</div>
	{/if}
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
