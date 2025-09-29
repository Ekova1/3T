import avatarSrc from './img/avatar-1.jpg'
import clsx from 'clsx'

export function Profile({ className, name = 'Ekova1', rating = '1230', avatar = avatarSrc }) {
	return (
		<div className={clsx(
			className,
			'flex items-center gap-2 text-start text-secondary  overflow-hidden '
		)}>
			<img src={avatar} alt="avatar" width={50} height={50} className='rounded-full' />
			<div>
				<div className="truncate text-xl">{name}</div>
				<div className="text-slate-400 text-sm">Рейтинг: {rating}</div>
			</div>
		</div>
	)
}