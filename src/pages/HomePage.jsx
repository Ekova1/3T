import { Header } from '../components/Header'
import { Game } from '../components/Game-new'

export default function HomePage() {
	return (
		<HomePageLayout header={<Header />}>
			<Game />
		</HomePageLayout>
	)
}


function HomePageLayout({ header, children }) {
	return (
		<div className='bg-zinc-100 min-h-screen'>
			{header}
			<main className='pt-4 mx-auto w-max'>
				{children}
			</main>
		</div>
	)
}
