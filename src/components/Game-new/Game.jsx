import { useReducer } from 'react'
import { GameLayout } from './UI/GameLayout'
import { GameTitle } from './UI/GameTitle'
import { BackLink } from './UI/BackLink'
import { GameInfo } from './UI/GameInfo'
import { PlayerInfo } from './UI/PlayerInfo'
import { PLAYERS, MOVE_ORDER } from './constance'
import { GameMoveInfo } from './UI/GameMoveInfo'
// import { useGameState } from './model/useGameState'
import { GameCell } from './UI/GameCell'
import { GameOverModal } from './UI/GameOverModal'
import { getNextStep } from './model/getNextStep'
import { getWinner } from './model/getWinner'
import { gameStateReducer, initGameState, GAME_STATE_ACTIONS } from './model/GameStateReducer'


const PLAYERS_COUNT = 4
export function Game() {
	const [gameState, dispatch] = useReducer(
		gameStateReducer,
		{ playersCount: PLAYERS_COUNT },
		initGameState
	)
	const currentStep = gameState.currentStep
	const cells = gameState.cells

	const nextStep = getNextStep(gameState.currentStep, gameState.playersCount)
	const winner = getWinner(cells, 5, 19)
	const winnerSymbol = currentStep == nextStep ? currentStep : winner?.winnerSymbol

	return (
		<>
			<GameLayout
				backLink={<BackLink />}
				gameTitle={<GameTitle />}
				gameInfo={<GameInfo
					playersCount={2}
					isRatingGame
					timeMode={"1 мин на ход"}
				/>}
				playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
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
				gameMoveInfo={<GameMoveInfo currentStep={currentStep} nextStep={nextStep} />}
				cells={
					cells.map((symbol, index) => {
						return <GameCell
							key={index}
							symbol={symbol}
							onClick={() => dispatch({
								type: GAME_STATE_ACTIONS.CELL_CLICK,
								index
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
				name="Ekova1"
				playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
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
			/>
		</>



	)
}