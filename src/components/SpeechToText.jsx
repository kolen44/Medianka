'use client'
import 'babel-polyfill'
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition'
import { ChatGPT } from '../api/ChatGPT'
import { YaGPT } from '../api/YandexGPT'
import { useStores } from '../data/store/useStore'
import { TypingBox } from './TypingBox'

export default function SpeechToText() {
	const setLoadingSpeak = useStores(state => state.setLoadingSpeak)
	let chatGPTResponseBoolean = useStores(state => state.chatGPTResponseBoolean)
	const responseText = useStores(state => state.responseText)
	const setTrueResponse = useStores(set => set.setTrueResponse)
	const setPromptText = useStores(state => state.setPromptText)

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
	async function YaGPTSend(text) {
		const response = await YaGPT(text)
		setTrueResponse()
		console.log(response)
		resetTranscript()
	}

	return (
		<>
			<div className='main-content   from-slate-300/30 via-gray-400/30 to-slate-600-400/30 p-4  backdrop-blur-md rounded-xl border-slate-100/30 border'>
				<TypingBox />
				{transcript ? transcript : 'Голосовой ввод также поддерживается!'}
				<div className='btn-style '>
					<button
						onClick={() => {
							SpeechRecognition.startListening(), setLoadingSpeak(true)
						}}
					>
						Начать запись
					</button>
					<button
						onClick={() => {
							SpeechRecognition.stopListening(), setLoadingSpeak(false)
						}}
					>
						Закончить
					</button>
					<button onClick={YaGPTSend}>Отправить</button>
				</div>
			</div>
		</>
	)
}
