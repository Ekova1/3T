import clsx from 'clsx'
import { GameSymbol } from './GameSymbol'
import { useNow } from '../../lib/useNow';

export function PlayerInfo({ gridIndex, isRight, avatar, name, rating, symbol, timer, timerStartAt }) {
	const now = useNow(1000, timerStartAt)
	const mills = Math.max((now) ? timer - (now - timerStartAt) : timer, 0)

	const seconds = Math.ceil(mills / 1000)
	const gridPositions = [
		'row-start-1 col-start-1',      // верхний левый
		'row-start-1 col-start-2',      // верхний правый  
		'row-start-2 col-start-2',      // нижний правый
		'row-start-2 col-start-1',      // нижний левый
	];
	const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0')
	const secondsString = String(seconds % 60).padStart(2, '0')
	const isWarning = seconds < 10 && seconds != 0
	const isDanger = seconds < 4 && seconds != 0
	return (
		<div className={clsx(
			gridPositions[gridIndex],
			'flex items-center gap-6 overflow-hidden text-main-black'
		)}>
			<div className={clsx('relative w-full', isRight && 'order-3')}>
				<div className='flex items-center gap-2 text-start text-secondary overflow-hidden'>
					<img src={avatar} alt="avatar" width={50} height={50} className='rounded-full' />
					<div className='min-w-0 flex-1'>
						<div className="truncate text-xl">{name}</div>
						<div className="text-slate-400 text-sm">Рейтинг: {rating}</div>
					</div>
				</div>
				<div className="flex items-center justify-center bg-white shadow w-5 h-5 rounded-full absolute -top-1 -left-1">
					<GameSymbol symbol={symbol} />
				</div>
			</div>

			<div className={clsx('w-px h-6 bg-slate-300', isRight && 'order-2')}></div>
			<div className={clsx(
				' text-lg font-medium w-21',
				isRight && 'order-1',
				!timerStartAt && 'opacity-50',
				isWarning && 'text-amber-600',
				isDanger && 'text-red-600',
			)}>
				{minutesString}:{secondsString}
			</div>
		</div>
	)
}

