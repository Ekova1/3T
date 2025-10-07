import { UIModal } from '../../uikit/UIModal'
import { UIButton } from '../../uikit/UIButton'

export function GameOverModal({ winnerSymbol, name, playersList }) {
	return (
		<UIModal isOpen={!!winnerSymbol}>
			<UIModal.Header>Игра завершена!</UIModal.Header>

			<UIModal.Body>
				<div className="text-sm mt-2">Победитель: <span className='text-secondary'>{name}</span></div>
				<div className="w-full mt-2 grid grid-cols-2 gap-2 overflow-hidden">
					{playersList}
				</div>
			</UIModal.Body>

			<UIModal.Footer className='flex gap-4 justify-end mt-auto'>
				<UIButton size='md' variant='outline'>Вернуться</UIButton>
				<UIButton size='md' variant='primary'>Играть снова!</UIButton>
			</UIModal.Footer>
		</UIModal>
	)
}