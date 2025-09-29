import { useEffect, useState } from 'react'
import { Profile } from '../Profile'
import avatar_1 from '../Profile/img/avatar-1.jpg'
import avatar_2 from '../Profile/img/avatar-2.jpg'
import avatar_3 from '../Profile/img/avatar-3.jpg'
import avatar_4 from '../Profile/img/avatar-4.jpg'
import { MOVE_ORDER } from './constance'
import { GameSymbol } from './GameSymbol'
import clsx from 'clsx'

const players = [
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


const gridPositions = [
	'row-start-1 col-start-1',      // верхний левый
	'row-start-1 col-start-2',      // верхний правый  
	'row-start-2 col-start-2',      // нижний правый
	'row-start-2 col-start-1',      // нижний левый
];

export function GameInfo({ className, playersCount, currentStep, winnerSymbol, onPlayerTimeOver }) {
	return (
		<div className={clsx('w-full py-3 px-7 bg-white shadow-md rounded-2xl grid grid-cols-2 gap-2', className)}>
			{players.slice(0, playersCount).map((player, index) => {
				return (
					<div key={player.id} className={gridPositions[index]}>
						<PlayerInfo
							playerInfo={player}
							isRight={index == 1 || index == 2}
							symbol={MOVE_ORDER[index]}
							isTimerRunning={currentStep === MOVE_ORDER[index] && !winnerSymbol}
							onTimeOver={() => onPlayerTimeOver()}
						/>
					</div>
				)
			})}
		</div>
	)
}


function PlayerInfo({ playerInfo, isRight, symbol, isTimerRunning, onTimeOver }) {
	const [secondsTimer, setSecondsTimer] = useState(7)
	const minutes = String(Math.floor(secondsTimer / 60)).padStart(2, '0')
	const seconds = String(secondsTimer % 60).padStart(2, '0')
	const isWarning = secondsTimer < 10 && secondsTimer != 0
	const isDanger = secondsTimer < 4 && secondsTimer != 0



	useEffect(() => {
		if (isTimerRunning) {
			const interval = setInterval(() => {
				setSecondsTimer((s) => Math.max(s - 1, 0))
			}, 1000)

			// Очистка при размонтировании компонента
			return () => {
				clearInterval(interval)
				setSecondsTimer(7)
			}
		}

	}, [isTimerRunning])

	useEffect(() => {
		if (seconds == 0) {
			onTimeOver()
		}

	}, [seconds])

	return (
		<div className='flex items-center gap-6 overflow-hidden text-main-black'>
			<div className={clsx('relative', isRight && 'order-3')}>
				<Profile
					className='w-44'
					name={playerInfo.name}
					rating={playerInfo.rating}
					avatar={playerInfo.avatar}
				/>
				<div className="flex items-center justify-center bg-white shadow w-5 h-5 rounded-full absolute -top-1 -left-1">
					<GameSymbol symbol={symbol} />
				</div>
			</div>

			<div className={clsx('w-px h-6 bg-slate-200 ', isRight && 'order-2')}></div>
			<div className={clsx(
				' text-lg font-medium w-13',
				isRight && 'order-1',
				!isTimerRunning && 'opacity-50',
				isWarning && 'text-amber-600',
				isDanger && 'text-red-600',
			)}>
				{minutes}:{seconds}
			</div>
		</div>
	)
}