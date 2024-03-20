import 'regenerator-runtime/runtime'
import Experience from './Experience'
import SpeechToText from './SpeechToText'

function MainPage() {
	return (
		<>
			<div className='canvas3d'>
				<Experience />
				<SpeechToText />
			</div>
		</>
	)
}

export default MainPage
