import clsx from 'clsx'

export function UIButton({ children, className, size, variant }) {
	const buttonClassName = clsx(
		'flex items-center justify-center transition-colors tracking-wide font-wide font-medium',
		className,
		{
			md: 'min-w-22 px-6 py-2 text-sm rounded-sm',
			lg: 'min-w-44 px-6 py-2 text-2xl rounded-lg',
		}[size],
		{
			primary: 'text-white bg-secondary hover:bg-secondary-hover',
			outline: 'text-secondary border border-secondary hover:bg-teal-50',
		}[variant],
	)

	return (
		<button className={buttonClassName}>{children}</button>
	)
}