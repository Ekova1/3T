import { MOVE_ORDER } from '../constance';



export function getNextStep(currentStep, playersCount) {
	const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);
	const currentSymbolIndex = slicedMoveOrder.indexOf(currentStep);
	return slicedMoveOrder[currentSymbolIndex + 1] ?? slicedMoveOrder[0];
}
