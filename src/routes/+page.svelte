<script lang="ts">
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

	const data1 = [
		{
			word: 'Brady',
			clue: 'Quarterback with the most Super Bowl rings'
		},
		{
			word: 'Sanders',
			clue: 'Only player with 1,000 yards rushing in 10 seasons'
		},
		{
			word: 'Rice',
			clue: 'Wide receiver with the most career receiving yards'
		},
		{
			word: 'Gonzalez',
			clue: 'Tight end with the most career receiving yards'
		},
		{
			word: 'Montana',
			clue: 'Quarterback with the highest passer rating in Super Bowl history'
		},
		{
			word: 'Brown',
			clue: 'Running back with the most rushing yards in a single season'
		},
		{
			word: 'Lewis',
			clue: 'Linebacker with the most Pro Bowl appearances as a defensive player'
		},
		{
			word: 'Sanders',
			clue: 'Cornerback with the most interceptions in a single season'
		},
		{
			word: 'Bettis',
			clue: 'Only running back to rush for 1,000 yards in his 13th season'
		}
	];

	const data2 = {
		crossword: [
			{
				word: 'Brady',
				clue: 'A quarterback who has won seven Super Bowls and is regarded as one of the greatest players of all time in the NFL.'
			},
			{
				word: 'Rice',
				clue: 'A wide receiver who holds the records for most receptions, receiving yards, and touchdown receptions in NFL history.'
			},
			{
				word: 'Sanders',
				clue: 'A running back who is considered one of the greatest in NFL history, with impressive records and many accolades.'
			},
			{
				word: 'Payton',
				clue: 'A running back who played his entire NFL career with the Chicago Bears and is known for his record-breaking performances.'
			},
			{
				word: 'Smith',
				clue: 'A running back who set the record for most rushing yards in NFL history and was named to multiple Pro Bowls.'
			}
		]
	};
</script>

<main>
	<ChatScheduler />
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
