import { CrossIcon } from './icons/CrossIcon'
import { CircleIcon } from './icons/CircleIcon'
import { TriangleIcon } from './icons/TriangleIcon'
import { SquareIcon } from './icons/SquareIcon'

import { GAME_SYMBOLS } from '../constance'

export function GameSymbol({ symbol, className }) {
	const Icon = {
		[GAME_SYMBOLS.CROSS]: CrossIcon,
		[GAME_SYMBOLS.CIRCLE]: CircleIcon,
		[GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
		[GAME_SYMBOLS.SQUARE]: SquareIcon,
	}[symbol]

	return <Icon className={className} />
}