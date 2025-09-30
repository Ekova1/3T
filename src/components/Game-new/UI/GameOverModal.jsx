import { UIModal } from '../components/uikit/UIModal'
import { UIButton } from '../components/uikit/UIButton'

export function GameOverModal() {
	return (
		<UIModal isOpen={!!winnerSymbol} onClose={handleModalClose}>
			<UIModal.Header>Игра завершена!</UIModal.Header>

			<UIModal.Body>
				<div className="text-sm mt-2">Победитель: <span className='text-secondary'>Ekova1</span></div>
			</UIModal.Body>

			<UIModal.Footer className='flex gap-4 justify-end mt-auto'>
				<UIButton size='md' variant='outline'>Вернуться</UIButton>
				<UIButton size='md' variant='primary'>Играть снова!</UIButton>
			</UIModal.Footer>
		</UIModal>
	)
}