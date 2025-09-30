import clsx from 'clsx'
import { UIButton } from '../uikit/UIButton'
import { GameSymbol } from './GameSymbol'
import { GAME_SYMBOLS_COLORS } from './constance'


export function GameField({ className, cells, currentStep, nextStep, handleCellClick, winner, winnerSymbol }) {

	return (
		<GameFieldLayout className={className}>
			<GameMoveInfo currentStep={currentStep} nextStep={nextStep} />
			<GameCellsGrid>
				{cells.map((symbol, index) => {
					return <GameCell
						key={index}
						symbol={symbol}
						onClick={() => handleCellClick(index)}
						i={index}
						winner={winner?.sequence.includes(index) ? winner : null}
						disabled={!!winnerSymbol}
					/>
				})}
			</GameCellsGrid>
		</GameFieldLayout>
	)
}


function GameFieldLayout({ children, className }) {
	return (
		<div className={clsx(className, 'w-full py-5 px-7 bg-white shadow-md rounded-2xl')}>
			{children}
		</div>
	)
}

function GameMoveInfo({ currentStep, nextStep }) {
	return (
		<div className='flex items-center'>
			<div className='mr-auto'>
				<div className='flex gap-1 items-center text-xl font-medium'>
					Ход: <GameSymbol symbol={currentStep} className='w-4 h-4' />
				</div>
				<div className='flex gap-1 items-center text-xs text-slate-400'>
					Следующий: <GameSymbol symbol={nextStep} />
				</div>
			</div>
			<div className='flex gap-3'>
				<UIButton size={'md'} variant={'primary'}>Ничья</UIButton>
				<UIButton size={'md'} variant={'outline'}>Сдаться</UIButton>
			</div>
		</div>
	)
}


function GameCellsGrid({ children }) {
	return (
		<div className='mt-4 grid grid-cols-[repeat(19,_28px)] grid-rows-[repeat(19,_28px)] gap-px'>
			{children}
		</div>
	)
}

function GameCell({ symbol, onClick, winner, disabled }) {
	return (
		<button
			className={clsx(
				'flex flex-col justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-sm cursor-pointer transition-all ease-in-out',
				winner && GAME_SYMBOLS_COLORS[winner?.winnerSymbol]
			)}
			onClick={onClick}
			disabled={disabled}
		>
			{symbol && <GameSymbol symbol={symbol} className='w-5 h-5' />}
		</button>
	)
}