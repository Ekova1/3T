import { Header } from '../components/Header'
import { GameTitle } from '../components/Game'
import { GameInfo } from '../components/Game'
import { GameField } from '../components/Game'
import { useGameState } from '../components/Game/useGameState'
import { UIModal } from '../components/uikit/UIModal'
import { UIButton } from '../components/uikit/UIButton'
import { useState } from 'react'

export default function HomePage() {
	const [playersCount, setPlayersCount] = useState(2)

	const {
		cells,
		currentStep,
		nextStep,
		handleCellClick,
		handleTimeOver,
		playersTimeOver,
		winnerSymbol,
		winner
	} = useGameState(playersCount)

	const handleModalClose = () => {
		console.log("closing...")
	}

	return (
		<div className='bg-zinc-100 min-h-screen'>
			<Header />
			<main className='pt-4 mx-auto w-max'>
				<GameTitle playersCount={playersCount} />
				<GameInfo className='mt-2'
					playersCount={playersCount}
					currentStep={currentStep}
					winner={winner}
					winnerSymbol={winnerSymbol}
					onPlayerTimeOver={handleTimeOver}
					playersTimeOver={playersTimeOver}
				/>

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

				<GameField
					className='mt-2'
					playersCount={playersCount}
					cells={cells}
					currentStep={currentStep}
					nextStep={nextStep}
					handleCellClick={handleCellClick}
					winner={winner}
					winnerSymbol={winnerSymbol}
				/>
			</main>
		</div>
	)
}
