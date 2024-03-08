import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition'

export default function SpeechToText() {
	const {
		transcript,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition()

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>
	}
	return (
		<div className='container'>
			<h2>Speech to text</h2>
			<p>Converter</p>

			<div className='main-content'>{transcript}</div>

			<div className='btn-style'>
				<button onClick={SpeechRecognition.startListening}>Start</button>
				<button onClick={SpeechRecognition.stopListening}>Stop</button>
				<button onClick={resetTranscript}>Reset</button>
			</div>
		</div>
	)
}
