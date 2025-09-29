import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowIcon } from './icons/ArrowIcon'
import { PlayersIcon } from './icons/PlayersIcon'
import { StarIcon } from './icons/StarIcon'
import { TimerIcon } from './icons/TimerIcon'

export function GameTitle({ playersCount }) {
	return (
		<div className='mx-2'>
			<Link className='flex items-center gap-2 text-md text-secondary hover:text-secondary-hover transition-colors'>
				<ArrowIcon />
				<span>На главную</span>
			</Link>
			<h1 className='text-4xl font-medium text-main-black'>Крестики нолики</h1>
			<div className="pt-2 flex gap-4 items-center text-slate-400">
				<StarIcon />
				<div className="flex gap-1 items-center">
					<PlayersIcon />
					<span>{playersCount}</span>
				</div>
				<div className="flex gap-1 items-center">
					<TimerIcon />
					<span>1 мин на ход</span>
				</div>
			</div>
		</div>
	)
}