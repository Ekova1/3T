import logoSrc from './img/logo.svg'
import { Profile } from '../Profile'

export function Header() {
	return (
		<header className="flex items-center h-20 p-8 bg-white shadow-md">
			<div className="flex items-center">
				<div className="text-6xl text-primary font-extrabold -mb-1">3t</div>
				<img src={logoSrc} alt="logo" className='h-16' />
			</div>

			<div className="w-px h-8 bg-primary mx-6"></div>

			<button className='w-44 px-5 py-2 text-2xl rounded-lg text-white bg-secondary hover:bg-secondary-hover transition-colors tracking-wide font-wide'>Играть</button>

			<button className='ml-auto flex items-center gap-2 text-secondary hover:text-secondary-hover transition-colors'>
				<Profile />
				<svg width="16" height="10" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.18753 6.75003C6.04368 6.75003 5.89968 6.69505 5.78985 6.58522L0.164848 0.960222C-0.0549492 0.740426 -0.0549492 0.384504 0.164848 0.164848C0.384645 -0.0548086 0.740566 -0.0549492 0.960222 0.164848L6.18753 5.39216L11.4148 0.164848C11.6346 -0.0549492 11.9906 -0.0549492 12.2102 0.164848C12.4299 0.384645 12.43 0.740566 12.2102 0.960222L6.58522 6.58522C6.47539 6.69505 6.33139 6.75003 6.18753 6.75003Z" fill="currentColor" />
				</svg>
			</button>
		</header>
	)
}