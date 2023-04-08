<script lang="ts">
	import { onMount } from 'svelte';
	import ChatBox from './ChatBox.svelte';
	import { createEventDispatcher } from 'svelte';

	let transformed_data: any[] = [];
	const dispatch = createEventDispatcher();

	export let data = [
		{
			text: 'Hi!',
			who: 'them'
		},
		{
			text: "Let's play crosswords!",
			who: 'them'
		},
		{
			text: 'Just prompt me with a topic and I will give you a puzzle!',
			who: 'them'
		},
		{
			text: 'Awesome! Do you have an example?',
			who: 'you'
		},
		{
			text: "Sure! Let's start with a simple one!",
			who: 'them'
		},
		{
			text: 'How about the best NFL players of all time?',
			who: 'them'
		},
		{
			text: 'Sure!',
			who: 'you'
		},
		{
			text: "Awesome! Let's get started!",
			who: 'them'
		},
		{
			text: 'Remember, you can always prompt me with a new topic!',
			who: 'them'
		},
		{
			text: "Cool! Let's start!",
			who: 'you'
		},
		{
			text: 'Building the puzzle...',
			who: 'them'
		},
		{
			text: 'Here you go!',
			who: 'them'
		}
	];

	let current: any[] = [];
	let timer = 0;
	let current_index = 0;

	function readingTime(text: string) {
		const wps = 225 / 60;
		const words = text.trim().split(/\s+/).length;
		const time = Math.ceil((words / wps) * 1000);
		return time;
	}

	let accumulated_time = 0;
	for (let i = 0; i < data.length; i++) {
		const time = readingTime(data[i].text);
		const _data = {
			...data[i],
			ready: false,
			isolateDelay: time,
			delay: accumulated_time + (time < 1500 ? 1500 : time * 2),
			final: i === data.length - 1
		};
		accumulated_time = _data.delay;
		transformed_data.push(_data);
	}

	function run() {
		const elapsed = performance.now() - timer;
		if (elapsed > transformed_data[current_index].delay) {
			transformed_data[current_index].ready = true;
			current = current;
			if (!transformed_data[current_index + 1]) return;
			transformed_data[current_index + 1] && current_index++;

			current.push(transformed_data[current_index]);
			current = current;

			if (transformed_data[current_index].final) dispatch('final');
		}

		requestAnimationFrame(run);
	}

	function schedule() {
		timer = performance.now();
		requestAnimationFrame(run);
	}

	onMount(() => {
		current.push(transformed_data[current_index]);
		current = current;
		schedule();
	});
</script>

<div>
	{#each current as { text, who, ready, isolateDelay }}
		<ChatBox {who} {text} {ready} {isolateDelay} />
	{/each}
</div>

<style>
	div {
		padding-bottom: 50px;
	}
</style>
