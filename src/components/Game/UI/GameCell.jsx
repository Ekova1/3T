import { GAME_SYMBOLS_COLORS } from '../constance'
import { GameSymbol } from './GameSymbol'
import clsx from 'clsx'

export function GameCell({ symbol, onClick, winnerSymbol, disabled }) {
	return (
		<button
			className={
				clsx(
					'flex flex-col justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-sm cursor-pointer transition-all ease-in-out',
					winnerSymbol && GAME_SYMBOLS_COLORS[winnerSymbol]
				)
			}
			onClick={onClick}
			disabled={disabled}
		>
			{symbol && <GameSymbol symbol={symbol} className='w-5 h-5' />}
		</button >
	)
}