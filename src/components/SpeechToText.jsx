import 'babel-polyfill'
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition'
import { YaGPT } from '../api/YandexGPT'

export default function SpeechToText() {
	const res = YaGPT()
	console.log(res)
	const {
		transcript,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition()

	if (!browserSupportsSpeechRecognition) {
		console.log('lox')
	}
	return (
		<>
			<div className='main-content'>
				{transcript}
				<div className='btn-style'>
					<button onClick={SpeechRecognition.startListening}>Start</button>
					<button onClick={SpeechRecognition.stopListening}>Stop</button>
					<button onClick={resetTranscript}>Reset</button>
				</div>
			</div>
		</>
	)
}
