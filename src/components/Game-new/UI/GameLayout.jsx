export function GameLayout({ backLink, gameTitle, gameInfo, playersList }) {
	return (
		<div className="">

			<div className="mx-2">
				{backLink}
				{gameTitle}
				{gameInfo}
			</div>

			<div className="w-full py-3 px-7 bg-white shadow-md rounded-2xl grid grid-cols-2 gap-2">
				{playersList}
			</div>

		</div>



	)
}