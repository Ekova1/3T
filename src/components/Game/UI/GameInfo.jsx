import { PlayersIcon } from './icons/PlayersIcon'
import { StarIcon } from './icons/StarIcon'
import { TimerIcon } from './icons/TimerIcon'

export function GameInfo({ playersCount, isRatingGame, timeMode }) {
	return (
		<div className="pt-2 flex gap-4 items-center text-slate-400">
			{isRatingGame && <StarIcon />}
			<div className="flex gap-1 items-center">
				<PlayersIcon />
				<span>{playersCount}</span>
			</div>
			<div className="flex gap-1 items-center">
				<TimerIcon />
				<span>{timeMode}</span>
			</div>
		</div>
	)
}