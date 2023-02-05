'use client'

import Button, { buttonPropsType } from '@/components/Button'

const buttonProps: buttonPropsType = {
	children: 'Click me',
	onClick: () => console.log('Clicked'),
	type: 'button'
}

export default function Home() {
	return (
		<div>
			<h1>Nextjs starter by Antoine Delcourte</h1>
			<Button {...buttonProps} />
		</div>
	)
}
