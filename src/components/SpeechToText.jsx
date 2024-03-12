import 'babel-polyfill'
import { useState } from 'react'
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition'
import { ChatGPT } from '../api/ChatGPT'

export default function SpeechToText() {
	const [isResponse, setIsResponse] = useState('')
	const {
		transcript,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition()

	if (!browserSupportsSpeechRecognition) {
		console.log("Your browser does'nt support speech recognition")
	}

	async function send(text) {
		console.log(text)
		const response = await ChatGPT(text)
		if (response) {
			setIsResponse(response.replace(/[^+\d]/g, ''))
		}
		console.log(response)
	}

	return (
		<>
			<div className='main-content'>
				{isResponse}
				{transcript}
				<div className='btn-style'>
					<button onClick={SpeechRecognition.startListening}>Start</button>
					<button onClick={SpeechRecognition.stopListening}>Stop</button>
					<button onClick={resetTranscript}>Reset</button>
				</div>
				<button onClick={() => send(transcript)}>Send</button>
			</div>
		</>
	)
}
