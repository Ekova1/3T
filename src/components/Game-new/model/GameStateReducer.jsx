import { MOVE_ORDER } from "../constance"
import { getNextStep } from './getNextStep'

export const GAME_STATE_ACTIONS = {
	CELL_CLICK: "CELL_CLICK",
}

export const gameStateReducer = (state, action) => {
	const { index } = action
	switch (action.type) {
		case GAME_STATE_ACTIONS.CELL_CLICK: {
			if (state.cells[index]) return

			const nextStep = getNextStep(state.currentStep, state.playersCount)

			return {
				...state,
				cells: state.cells.map((cell, i) =>
					i === index ? state.currentStep : cell
				),
				currentStep: nextStep,
			}
		}
		default:
			return state
	}
}

export const initGameState = ({ playersCount }) => ({
	cells: new Array(19 * 19).fill(null),
	currentStep: MOVE_ORDER[0],
	playersCount
})