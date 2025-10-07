import { GameSymbol } from "./GameSymbol"
import { UIButton } from "../../uikit/UIButton"

export function GameMoveInfo({ currentStep, nextStep }) {
	return (
		<>
			<div className='mr-auto'>
				<div className='flex gap-1 items-center text-xl font-medium'>
					Ход: <GameSymbol symbol={currentStep} className='w-4 h-4' />
				</div>
				<div className='flex gap-1 items-center text-xs text-slate-400'>
					Следующий: <GameSymbol symbol={nextStep} />
				</div>
			</div>
			<div className='flex gap-3'>
				<UIButton size={'md'} variant={'primary'}>Ничья</UIButton>
				<UIButton size={'md'} variant={'outline'}>Сдаться</UIButton>
			</div>
		</>
	)
}