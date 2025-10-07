import avatar_1 from '../Profile/img/avatar-1.jpg'
import avatar_2 from '../Profile/img/avatar-2.jpg'
import avatar_3 from '../Profile/img/avatar-3.jpg'
import avatar_4 from '../Profile/img/avatar-4.jpg'

export const GAME_SYMBOLS = {
	CIRCLE: 'circle',
	CROSS: 'cross',
	TRIANGLE: 'triangle',
	SQUARE: 'square',
};

export const MOVE_ORDER = [
	GAME_SYMBOLS.CROSS,
	GAME_SYMBOLS.CIRCLE,
	GAME_SYMBOLS.TRIANGLE,
	GAME_SYMBOLS.SQUARE,
]

export const GAME_SYMBOLS_COLORS = {
	'circle': 'bg-teal-600/20 hover:bg-teal-600/20',
	'cross': 'bg-orange-600/20 hover:bg-orange-600/20',
	'triangle': 'bg-sky-600/20 hover:bg-sky-600/20',
	'square': 'bg-purple-600/20 hover:bg-purple-600/20',
};

export const PLAYERS = [
	{
		id: 1,
		name: 'Ekova1',
		rating: '1488',
		avatar: avatar_1,
	},
	{
		id: 2,
		name: 'Tokyo revenger',
		rating: '841',
		avatar: avatar_2,
	},
	{
		id: 3,
		name: 'AmineXDDDAmine',
		rating: '914',
		avatar: avatar_3,
	},
	{
		id: 4,
		name: 'rakesh',
		rating: '1590',
		avatar: avatar_4,
	},
]
