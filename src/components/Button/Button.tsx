import styles from './Button.module.scss'

export type buttonPropsType = {
	children: React.ReactNode
	className?: string
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
}

export default function Button({
	children,
	className,
	onClick,
	type = 'button'
}: buttonPropsType) {
	return (
		<button
			className={`${className ?? ''} ${styles.button}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	)
}
