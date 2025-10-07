import { useReducer } from 'react'
import { GameLayout } from './UI/GameLayout'
import { GameTitle } from './UI/GameTitle'
import { BackLink } from './UI/BackLink'
import { GameInfo } from './UI/GameInfo'
import { PlayerInfo } from './UI/PlayerInfo'
import { PLAYERS, MOVE_ORDER } from './constance'
import { GameMoveInfo } from './UI/GameMoveInfo'
import { GameCell } from './UI/GameCell'
import { GameOverModal } from './UI/GameOverModal'
import { getNextStep } from './model/getNextStep'
import { getWinner } from './model/getWinner'
import { gameReducer, initGameState, GAME_STATE_ACTIONS } from './model/gameReducer'
import { computePlayerTimer } from './model/computePlayerTimer'
import { useInterval } from '../lib/useNow'


const PLAYERS_COUNT = 4
export function Game() {
	const [gameState, dispatch] = useReducer(
		gameReducer,
		{ playersCount: PLAYERS_COUNT, defaultTimer: 1000, currentStepStart: Date.now() },
		initGameState
	)

	const currentStep = gameState?.currentStep
	const cells = gameState?.cells

	const nextStep = getNextStep(gameState.currentStep, gameState.playersCount, gameState.timers)
	const winner = getWinner(cells, 5, 19)
	const winnerSymbol = currentStep == nextStep ? currentStep : winner?.winnerSymbol

	useInterval(1000, !winnerSymbol ? gameState.currentStepStart : undefined, () => {
		dispatch({
			type: GAME_STATE_ACTIONS.TICK,
			now: Date.now(),
		})
	})

	return (
		<>
			<GameLayout
				backLink={<BackLink />}
				gameTitle={<GameTitle />}
				gameInfo={<GameInfo
					playersCount={PLAYERS_COUNT}
					isRatingGame
					timeMode={"1 мин на ход"}
				/>}
				playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
					const playerSymbol = MOVE_ORDER[index]
					const { timer, timerStartAt } = computePlayerTimer(gameState, playerSymbol)
					return (
						<PlayerInfo
							gridIndex={index}
							key={player.id}
							isRight={index == 1 || index == 2}
							avatar={player.avatar}
							name={player.name}
							rating={player.rating}
							symbol={playerSymbol}
							timer={timer}
							timerStartAt={timerStartAt}
						/>
					)
				})}
				gameMoveInfo={<GameMoveInfo currentStep={currentStep} nextStep={nextStep} />}
				cells={
					cells.map((symbol, index) => {
						return <GameCell
							key={index}
							symbol={symbol}
							onClick={() => dispatch({
								type: GAME_STATE_ACTIONS.CELL_CLICK,
								index,
								now: Date.now()
							})}
							i={index}
							winnerSymbol={winner?.sequence.includes(index) ? winnerSymbol : null}
							disabled={!!winnerSymbol}
						/>
					})
				}
			>
			</GameLayout >

			<GameOverModal
				winnerSymbol={winnerSymbol}
				handleModalClose={() => console.log("closing...")}
				name={PLAYERS[MOVE_ORDER.indexOf(winnerSymbol)]?.name}
				playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
					const playerSymbol = MOVE_ORDER[index]
					const { timer } = computePlayerTimer(gameState, playerSymbol)
					return (
						<PlayerInfo
							gridIndex={index}
							key={player.id}
							isRight={index == 1 || index == 2}
							avatar={player.avatar}
							name={player.name}
							rating={player.rating}
							symbol={MOVE_ORDER[index]}
							timer={timer}
						/>
					)
				})}
			/>
		</>



	)
}  