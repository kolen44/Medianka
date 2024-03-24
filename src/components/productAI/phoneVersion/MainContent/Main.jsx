import { ExampleWrapper } from '@/widgets/confidenceModal/confidenceModal'
import About from './About/About'
import { FloatingPhone } from './Phone/phone'

export default function Main() {
	return (
		<div
			className='absolute  h-full  z-11 pointer-events-none  w-full justify-between'
			style={{ top: '100px' }}
		>
			<ExampleWrapper />
			<About />
			<FloatingPhone />
		</div>
	)
}
