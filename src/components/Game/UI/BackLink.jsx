import { Link } from 'react-router-dom';
import { ArrowIcon } from './icons/ArrowIcon'

export function BackLink() {
	return (
		<Link className='flex items-center gap-2 text-md text-secondary hover:text-secondary-hover transition-colors'>
			<ArrowIcon />
			<span>На главную</span>
		</Link>
	)
}