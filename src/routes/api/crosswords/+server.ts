import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

export const POST = (async ({ request }) => {
	const { userPrompt } = await request.json();

	if (!userPrompt) throw error(400, 'Please provide a prompt...');

	const configuration = new Configuration({
		apiKey: OPENAI_API_KEY
	});
	const openai = new OpenAIApi(configuration);

	const prompt = `
		Generate a list of crossword answers and clues in json format. 
		It must have between 5 and 10 units. 
		It should be an array with objects with the following keys: "clue", "answer".
		The clues should be between 15 and 150 characters long.
		The answer should be between 3 and 10 characters long. 
		It should be about this topic: ${userPrompt}.
		`;

	try {
		const completion = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: prompt }]
		});

		// const response = await openai.Completion.create({
		//   engine: 'davinci',
		//   prompt,
		//   max_tokens: 1024,
		//   n: 1,
		//   stop: null,
		//   temperature: 0.5,
		// });

		const output = completion.data.choices[0].message?.content;
		console.log(output);

		// const outputList = output?.split('\n').map((line: string) => {
		// 	const [word, clue] = line.split(':');
		// 	return { word: word.trim(), clue: clue.trim() };
		// });

		return json({ outputList: output });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		console.log(e);
		throw error(400, e.message);
	}
}) satisfies RequestHandler;
