export function GameLayout({ backLink, gameTitle, gameInfo, playersList, gameMoveInfo, cells }) {
	return (
		<>
			<div className="mx-2">
				{backLink}
				{gameTitle}
				{gameInfo}
			</div>

			<div className="w-full py-3 px-7 bg-white shadow-md rounded-2xl grid grid-cols-2 gap-2 overflow-hidden">
				{playersList}
			</div>

			<div className='w-full py-5 px-7 bg-white shadow-md rounded-2xl mt-3'>
				<div className='flex items-center'>
					{gameMoveInfo}
				</div>
				<div className="flex justify-center">
					<div className='mt-4 grid grid-cols-[repeat(19,_32px)] grid-rows-[repeat(19,_32px)] gap-px'>
						{cells}
					</div>
				</div>
			</div>


		</>


	)
}