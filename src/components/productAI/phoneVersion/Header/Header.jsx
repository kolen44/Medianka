import { HeaderDots } from './HeaderDots/HeaderDots'
import IconSideNav from './NavBar/NavBar'

export default function Header() {
	return (
		<div className='h-screen fixed w-full'>
			<IconSideNav />
			<HeaderDots />
		</div>
	)
}
