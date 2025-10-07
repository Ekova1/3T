import { MOVE_ORDER } from '../constance';



export function getNextStep(currentStep, playersCount, timers) {
	const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
		(symbol) => timers[symbol] > 0
	)
	const currentSymbolIndex = slicedMoveOrder.indexOf(currentStep);
	return slicedMoveOrder[currentSymbolIndex + 1] ?? slicedMoveOrder[0];
}
