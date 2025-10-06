import { useEffect } from "react"
import { MOVE_ORDER } from "../constance"
import { getNextStep } from './getNextStep'

export const GAME_STATE_ACTIONS = {
	CELL_CLICK: "CELL_CLICK",
	TICK: "TICK",
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
	switch (action.type) {
		case GAME_STATE_ACTIONS.CELL_CLICK: {
			const { index, now } = action
			if (gameState.cells[index]) return gameState

			const nextStep = getNextStep(gameState.currentStep, gameState.playersCount, gameState.timers)

			return {
				...gameState,
				cells: updateCells(gameState, index),
				currentStep: nextStep,
				currentStepStart: now,
				timers: updateTimers(gameState, now)
			}
		}

		case GAME_STATE_ACTIONS.TICK: {
			const { now } = action
			if (!isTimeOver(gameState, now)) return gameState

			const nextStep = getNextStep(gameState.currentStep, gameState.playersCount, gameState.timers)

			return {
				...gameState,
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

function isTimeOver(gameState, now) {
	const timer = updateTimers(gameState, now)[gameState.currentStep]
	return timer <= 0
}