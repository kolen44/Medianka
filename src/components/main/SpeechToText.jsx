'use client'
import { YaGPTSend } from '@/feautures/main/SpeechSendYaGPT'
import 'idempotent-babel-polyfill'
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition'
import { ToastContainer } from 'react-toastify'
import { useStores } from '../../data/main/store/useStore'
import ResponseBlockquote from './ResponseBlockquote'
import { TypingBox } from './TypingBox'

export default function SpeechToText() {
	const setLoadingSpeak = useStores(state => state.setLoadingSpeak)
	const setBlockquotesFromYandexGPT = useStores(
		state => state.setBlockquotesFromYandexGPT
	)
	const setTimeToSpeak = useStores(state => state.setTimeToSpeak)

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

	async function ask() {
		const requestText = transcript
		const final = await YaGPTSend(requestText)
		const voices = window.speechSynthesis.getVoices()
		const lastVoice = voices[voices.length - 1]
		const utterance = new SpeechSynthesisUtterance(final)
		window.speechSynthesis.speak(utterance)
		setBlockquotesFromYandexGPT(final)
		setTimeToSpeak(true)
		setTimeout(() => {
			setTimeToSpeak(false)
		}, 10000)
	}

	return (
		<>
			<div className='main-content   from-slate-300/30 via-gray-400/30 to-slate-600-400/30 p-4  backdrop-blur-md rounded-xl border-slate-100/30 border'>
				<TypingBox />
				{transcript ? transcript : 'Голосовой ввод также поддерживается!'}
				<div className='btn-style '>
					<button
						onClick={() => {
							SpeechRecognition.startListening(),
								setLoadingSpeak(true),
								window.speechSynthesis.cancel()
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
					<button
						onClick={() => {
							ask(), setLoadingSpeak(false)
						}}
					>
						Отправить
					</button>
				</div>
				<ResponseBlockquote />
				<ToastContainer />
			</div>
		</>
	)
}
