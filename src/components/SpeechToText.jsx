'use client'
import 'idempotent-babel-polyfill'
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition'
import { useStores } from '../data/store/useStore'
import ResponseBlockquote from './ResponseBlockquote'
import { TypingBox } from './TypingBox'

export default function SpeechToText() {
	const setLoadingSpeak = useStores(state => state.setLoadingSpeak)
	let chatGPTResponseBoolean = useStores(state => state.chatGPTResponseBoolean)
	const responseText = useStores(state => state.responseText)
	const setTrueResponse = useStores(set => set.setTrueResponse)
	const setPromptText = useStores(state => state.setPromptText)
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

	async function YaGPTSend() {
		const url = '/api/YandexGPT'
		if (transcript) {
			const res = await fetch(url, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({ text: transcript }),
			})
			const final = await res.json()
			if (final.length) {
				setBlockquotesFromYandexGPT(final)
				const voices = window.speechSynthesis.getVoices()
				const lastVoice = voices[voices.length - 1]
				const utterance = new SpeechSynthesisUtterance(final)
				utterance.voice = lastVoice
				window.speechSynthesis.speak(utterance)
				console.log(final.replace(' ', ''))
				setTimeToSpeak(true)
				return setTimeout(() => {
					setTimeToSpeak(false)
				}, 10000)
			} else {
				return new Error('На внутреннем сервере ошибка')
			}

			console.log(final)
			resetTranscript()
		}
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
							YaGPTSend(), setLoadingSpeak(false)
						}}
					>
						Отправить
					</button>
				</div>
				<ResponseBlockquote />
			</div>
		</>
	)
}
