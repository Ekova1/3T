import { useEffect } from "react"
import { MOVE_ORDER } from "../constance"
import { getNextStep } from './getNextStep'

export const GAME_STATE_ACTIONS = {
	CELL_CLICK: "CELL_CLICK",
}


export const initGameState = ({ playersCount, defaultTimer, currentStepStart }) => ({
	cells: new Array(19 * 19).fill(null),
	currentStep: MOVE_ORDER[0],
	currentStepStart,
	playersCount,
	timers: MOVE_ORDER.reduce((timers, symbol, index) => {
		if (index < playersCount) {
			timers[symbol] = defaultTimer
		}
		return timers
	}, {}),
})


export const gameReducer = (gameState, action) => {
	const { index, now } = action
	switch (action.type) {
		case GAME_STATE_ACTIONS.CELL_CLICK: {
			if (gameState.cells[index]) return gameState

			const nextStep = getNextStep(gameState.currentStep, gameState.playersCount)

			return {
				...gameState,
				cells: updateCells(gameState, index),
				currentStep: nextStep,
				currentStepStart: now,
				timers: updateTimers(gameState, now)
			}
		}
		default:
			return gameState
	}
}

function updateCells(gameState, index) {
	return (
		gameState.cells.map((cell, i) =>
			i === index ? gameState.currentStep : cell
		)
	)
}

function updateTimers(gameState, now) {
	const diff = now - gameState.currentStepStart
	const timer = gameState.timers[gameState.currentStep]
	return {
		...gameState.timers,
		[gameState.currentStep]: timer - diff
	}
}