'use client'

import Button, { buttonPropsType } from '@/components/button'

const buttonProps: buttonPropsType = {
	children: 'Click me',
	onClick: () => console.log('Clicked'),
	type: 'button'
}

export default function Home() {
	return (
		<div>
			<h1 className="text-[6.4rem] uppercase font-extrabold">
				Nextjs starter by Antoine Delcourte
			</h1>
			<Button {...buttonProps} />
		</div>
	)
}
