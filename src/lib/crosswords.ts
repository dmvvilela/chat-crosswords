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
	const words = options.map((o: any) => o.answer.toUpperCase());
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

	return data;
}

export const example1 = [
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

export const example2 = {
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
