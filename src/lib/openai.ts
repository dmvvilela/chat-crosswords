import { Configuration, OpenAIApi } from 'openai';

let openai: OpenAIApi;

export function init(apiKey: string) {
	const configuration = new Configuration({ apiKey });

	openai = new OpenAIApi(configuration);
}

export async function promptAI(userPrompt: string) {
	if (!userPrompt) throw new Error('Please provide a prompt...');

	const prompt = `
  Generate a list of crossword answers and clues in json format. 
  It should have around 8 units. 
  It should be an array with objects with the following keys: "clue", "answer".
  The clues should be between 15 and 150 characters long.
  The answer should be between 3 and 10 characters long. 
  The answer should ideally be a single word and cannot contain any special characters.
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

		const output = completion.data.choices[0].message?.content || '';
		console.log(output);

		// const outputList = output?.split('\n').map((line: string) => {
		// 	const [word, clue] = line.split(':');
		// 	return { word: word.trim(), clue: clue.trim() };
		// });

		return { crosswords: output };
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		console.log(e);
		throw new Error(e.message);
	}
}
