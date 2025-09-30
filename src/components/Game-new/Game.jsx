import { GameLayout } from './UI/GameLayout'
import { GameTitle } from './UI/GameTitle'
import { BackLink } from './UI/BackLink'
import { GameInfo } from './UI/GameInfo'
import { PlayerInfo } from './UI/PlayerInfo'
import { PLAYERS, MOVE_ORDER } from './constance'

export function Game() {
	return (
		<GameLayout
			backLink={<BackLink />}
			gameTitle={<GameTitle />}
			gameInfo={<GameInfo
				playersCount={2}
				isRatingGame
				timeMode={"1 мин на ход"}
			/>}
			playersList={PLAYERS.map((player, index) => (
				<PlayerInfo
					gridIndex={index}
					key={player.id}
					isRight={index == 1 || index == 2}
					avatar={player.avatar}
					name={player.name}
					rating={player.rating}
					symbol={MOVE_ORDER[index]}
					secondsTimer={60}
				/>
			))}
		>

		</GameLayout>
	)
}