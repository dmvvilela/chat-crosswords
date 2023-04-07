import { error, json, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

export const POST = (async ({ request }) => {
	const configuration = new Configuration({
		apiKey: OPENAI_API_KEY
	});
	const openai = new OpenAIApi(configuration);

	const prompt = `
		Generate a list of crossword words and clues in json format. 
		It must have between 5 and 10 units. Each word should have a clue. 
		The clues should be between 30 and 150 characters long.
		The words should be between 3 and 10 characters long. 
		It should be about this topic: Best NFL players of all time.
		`;

	try {
		const completion = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: prompt }]
		});
		console.log(completion.data.choices[0].message?.content);

		// const response = await openai.Completion.create({
		//   engine: 'davinci',
		//   prompt,
		//   max_tokens: 1024,
		//   n: 1,
		//   stop: null,
		//   temperature: 0.5,
		// });

		const output = completion.data.choices[0].message?.content;

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

	// const { name, email, message, token }: TContactData = await request.json();

	// if (!name || !email || !message || !token)
	// 	throw error(400, 'Favor preencher os campos obrigatórios.');

	// try {
	// 	const template = 'site_contact';
	// 	const subject = templateNameToSubject(template);

	// 	const body = await renderEmailBody(template, subject, 'svelte', { name, email, message });
	// 	if (!body) {
	// 		throw error(404, 'Template not found');
	// 	}

	// 	return text('Mensagem enviada com sucesso. Agradecemos o seu contato!');
	// } catch (e) {
	// 	console.log(e);
	// 	// await sendNotification(`sendMail error: ${e}\n\n${JSON.stringify({ name, email, message })}`);
	// 	throw error(400, 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
	// }
}) satisfies RequestHandler;
