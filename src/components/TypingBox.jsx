'use client'
import { useState } from 'react'
import { useStores } from '../data/store/useStore'

export const TypingBox = () => {
	let loadingSpeak = useStores(state => state.loadingSpeak)
	const [question, setQuestion] = useState('')
	const askAI = useStores(state => state.chatGPTResponseBoolean)
	const setPromptText = useStores(state => state.setPromptText)

	const handleInputChange = (event) => {
		setQuestion(event.target.value);
	  };

	const ask = async (question = 'kkk') => {
		
		console.log(question)
		const url = '/api/YandexGPT'
		setQuestion('lll')
		let postBody = {
			"draft_order": {
				"line_items": [{
					"text": "question"
				}]
			}
		}
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postBody),
		})
		console.log(res)
		const final = await res.json()
		console.log(final)
		await setPromptText(final)
		setQuestion('')
	}
	return (
		<div className='z-10 max-w-[600px] flex space-y-6 flex-col bg-gradient-to-tr  from-slate-300/30 via-gray-400/30 to-slate-600-400/30 p-4  backdrop-blur-md rounded-xl border-slate-100/30 border mb-7'>
			<div>
				<h2 className='text-white font-bold text-xl'>
					Хотите спросить нейросеть?
				</h2>
				<p className='text-white/65'>
					Скажите о чем бы вы хотели спросить нейросеть и она обязательно вам
					поможет !
				</p>
			</div>

			{askAI || loadingSpeak ? (
				<div className='flex justify-center items-center'>
					<span className='relative flex h-4 w-4'>
						<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75'></span>
						<span className='relative inline-flex rounded-full h-4 w-4 bg-white'></span>
					</span>
				</div>
			) : (
				<div className='gap-3 flex'>
					<input
						className='focus:outline focus:outline-white/80 flex-grow bg-slate-800/60 p-2 px-4 rounded-full text-white placeholder:text-white/50 shadow-inner shadow-slate-900/60'
						placeholder='Когда был основан Кремль?'
						onChange={handleInputChange}
						onKeyDown={e => {
							if (e.key === 'Enter') {
								ask()
							}
						}}
					/>
					<button
						className='bg-slate-100/20 p-2 px-6 rounded-full text-white'
						onClick={ask}
					>
						Спросить
					</button>
				</div>
			)}
		</div>
	)
}
