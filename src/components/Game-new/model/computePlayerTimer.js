export function computePlayerTimer(gameState, playerSymbol) {
	return {
		timer: gameState.timers[playerSymbol],
		timerStartAt:
			playerSymbol === gameState.currentStep
				? gameState.currentStepStart
				: undefined
	}
}