

export function getWinner(cells, winnerSequenceSize, fieldSize) {
	// Проверяем все направления из каждой клетки
	for (let i = 0; i < cells.length; i++) {
		if (!cells[i]) continue;

		const player = cells[i];

		// Проверяем 4 направления
		const directions = [
			[0, 1], // горизонталь →
			[1, 0], // вертикаль ↓s
			[1, 1], // диагональ ↘
			[1, -1] // диагональ ↙
		];

		for (const [dr, dc] of directions) {
			const sequence = [i];
			let found = 1;

			// Проверяем в положительном направлении
			for (let step = 1; step < winnerSequenceSize; step++) {
				const row = Math.floor(i / fieldSize) + dr * step;
				const col = (i % fieldSize) + dc * step;

				if (row < 0 || row >= fieldSize || col < 0 || col >= fieldSize) break;

				const index = row * fieldSize + col;
				if (cells[index] === player) {
					sequence.push(index);
					found++;
				} else {
					break;
				}
			}

			// Проверяем в отрицательном направлении
			for (let step = 1; step < winnerSequenceSize; step++) {
				const row = Math.floor(i / fieldSize) - dr * step;
				const col = (i % fieldSize) - dc * step;

				if (row < 0 || row >= fieldSize || col < 0 || col >= fieldSize) break;

				const index = row * fieldSize + col;
				if (cells[index] === player) {
					sequence.unshift(index);
					found++;
				} else {
					break;
				}
			}

			if (found >= winnerSequenceSize) {
				return {
					winnerSymbol: player,
					sequence: sequence.slice(0, winnerSequenceSize)
				};
			}
		}
	}
	return null;
}



