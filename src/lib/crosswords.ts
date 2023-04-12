/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import CWG from 'cwg';

export type TCrosswordsData = {
	clue: string;
	answer: string;
};

export type TCrosswords = {
	clue: string;
	answer: string;
	direction: 'down' | 'across';
	x: number;
	y: number;
};

export function generateCrosswordsPuzzle(options: TCrosswordsData[]): TCrosswords[] {
	try {
		const words = options.map((o: any) => o.answer.toUpperCase().replaceAll(' ', ''));
		const result = CWG(words);
		const data = result.positionObjArr.map((item: any) => {
			return {
				clue: options.find((w: any) => w.answer.toUpperCase() === item.wordStr)?.clue,
				answer: item.wordStr,
				direction: item.isHorizon ? 'across' : 'down',
				x: item.xNum,
				y: item.yNum
			};
		});
		console.log(data);

		return data;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export const example1 = [
	{
		answer: 'Brady',
		clue: 'Quarterback with the most Super Bowl rings'
	},
	{
		answer: 'Sanders',
		clue: 'Only player with 1,000 yards rushing in 10 seasons'
	},
	{
		answer: 'Rice',
		clue: 'Wide receiver with the most career receiving yards'
	},
	{
		answer: 'Gonzalez',
		clue: 'Tight end with the most career receiving yards'
	},
	{
		answer: 'Montana',
		clue: 'Quarterback with the highest passer rating in Super Bowl history'
	},
	{
		answer: 'Brown',
		clue: 'Running back with the most rushing yards in a single season'
	},
	{
		answer: 'Lewis',
		clue: 'Linebacker with the most Pro Bowl appearances as a defensive player'
	},
	{
		answer: 'Sanders',
		clue: 'Cornerback with the most interceptions in a single season'
	},
	{
		answer: 'Bettis',
		clue: 'Only running back to rush for 1,000 yards in his 13th season'
	}
];

export const example2 = [
	{
		answer: 'Brady',
		clue: 'A quarterback who has won seven Super Bowls and is regarded as one of the greatest players of all time in the NFL.'
	},
	{
		answer: 'Rice',
		clue: 'A wide receiver who holds the records for most receptions, receiving yards, and touchdown receptions in NFL history.'
	},
	{
		answer: 'Sanders',
		clue: 'A running back who is considered one of the greatest in NFL history, with impressive records and many accolades.'
	},
	{
		answer: 'Payton',
		clue: 'A running back who played his entire NFL career with the Chicago Bears and is known for his record-breaking performances.'
	},
	{
		answer: 'Smith',
		clue: 'A running back who set the record for most rushing yards in NFL history and was named to multiple Pro Bowls.'
	}
];
