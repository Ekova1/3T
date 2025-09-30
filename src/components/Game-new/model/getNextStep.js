import { MOVE_ORDER } from '../constance';



export function getNextStep(currentStep, playersCount, playersTimeOver) {
	const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(symbol => !playersTimeOver.includes(symbol));
	const currentSymbolIndex = slicedMoveOrder.indexOf(currentStep);
	return slicedMoveOrder[currentSymbolIndex + 1] ?? slicedMoveOrder[0];
}
