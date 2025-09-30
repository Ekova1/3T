import { useState } from 'react'
import { MOVE_ORDER } from '../constance'
import { getWinner } from './getWinner'
import { getNextStep } from './getNextStep'



export function useGameState(playersCount) {
	const [{ cells, currentStep, playersTimeOver }, setGameState] = useState(() => ({
		cells: new Array(19 * 19).fill(null),
		currentStep: MOVE_ORDER[0],
		playersTimeOver: [],
	}))

	const nextStep = getNextStep(currentStep, playersCount, playersTimeOver)
	const winner = getWinner(cells, 5, 19)
	const winnerSymbol = currentStep == nextStep ? currentStep : winner?.winnerSymbol

	function handleCellClick(cellIndex) {
		if (cells[cellIndex]) return

		const cellsCopy = cells.slice()
		cellsCopy[cellIndex] = currentStep

		setGameState((lastGameState) => ({
			...lastGameState,
			cells: cellsCopy,
			currentStep: nextStep,
		}))
	}

	const handleTimeOver = () => {
		setGameState((lastGameState) => ({
			...lastGameState,
			currentStep: nextStep,
			playersTimeOver: [...lastGameState.playersTimeOver, currentStep]
		}))
	}

	return {
		cells,
		currentStep,
		setGameState,
		nextStep,
		playersTimeOver,
		handleCellClick,
		handleTimeOver,
		winnerSymbol,
		winner
	}
} 