import { ExampleWrapper } from '@/widgets/confidenceModal/confidenceModal'
import About from './About/About'
import { FloatingPhone } from './Phone/phone'

export default function Main() {
	return (
		<div
			className='absolute mt-15  h-full overflow-x-hidden z-11 pointer-events-none  w-full justify-between'
			style={{ top: '200px' }}
		>
			<ExampleWrapper />
			<About />
			<FloatingPhone />
		</div>
	)
}
