import React, { useState } from 'react'
import { use } from 'react';

const SYMBOL_X = 'X'
const SYMBOL_O = 'O'

const computeWinner = (cells) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			cells[a] &&
			cells[a] === cells[b] &&
			cells[a] === cells[c]
		) {
			return [a, b, c]
		}

	}
}

function App() {

	const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null])
	const [currentStep, setCurrentStep] = useState(SYMBOL_O)
	const [winnerSequence, setWinnerSequence] = useState()

	const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined
	const isGameDraw = (!cells.includes(null)) ? true : false

	const getSymbolClassName = (symbol) => {
		return symbol === SYMBOL_X ? 'symbol--x' : 'symbol--o'
	}

	const renderSymbol = (symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>

	const renderGameText = () => {
		if (winnerSequence) return (<div className="game-info">
			Победитель: {renderSymbol(winnerSymbol)}
		</div>)

		else if (isGameDraw) return (<div className="game-info">
			Ничья
		</div>)

		else return (<div className="game-info">
			Ход: {renderSymbol(currentStep)}
		</div>)
	}


	const handleCellsClick = (index) => {
		if (cells[index] || winnerSequence) return

		const cellsCopy = cells.slice()
		cellsCopy[index] = currentStep
		const winner = computeWinner(cellsCopy)

		setCells(cellsCopy)
		setCurrentStep(currentStep == SYMBOL_X ? SYMBOL_O : SYMBOL_X)
		setWinnerSequence(winner)
	}

	const handleClickReset = () => {
		setCells([null, null, null, null, null, null, null, null, null])
		setCurrentStep(SYMBOL_O)
		setWinnerSequence(null)
	}

	return (
		<div className="game">
			{renderGameText()}

			<div className="game-field">
				{cells.map((symbol, index) => {
					const isWinner = winnerSequence?.includes(index)
					return (<button
						key={index}
						className={`cell ${isWinner ? "cell--win--" + getSymbolClassName(symbol) : null}`}
						onClick={() => handleCellsClick(index)}>
						{renderSymbol(symbol)}
					</button>)
				})}
			</div>

			<div className="reset" onClick={handleClickReset}>
				<span>Сбросить</span>
			</div>

		</div>
	)
}

export default App
