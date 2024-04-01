import { handlerSendYaGPT } from '@/feautures/productAI/handlerSendYaGPT'
import { BubbleText } from '@/widgets/bubbleText/bubble'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import style from '../../../styles/productAI/SectionInput.module.css'

const SectionInput = () => {
	const [text, setText] = useState(false)
	const [textInInput, setTextInInput] = useState('')

	async function ask() {
		if (textInInput.length > 5) {
			const res = await handlerSendYaGPT(textInInput)
			setText(res)
		} else {
			setText('Введите хотя бы 5 символов 🥺')
		}
	}
	return (
		<div className={style.main} id='sectioninput'>
			<p className={style.text}>
				<BubbleText text={`Что я умею?`} />
			</p>
			<form className={style.form}>
				<input
					type='text'
					className={style.input}
					id='game4two'
					placeholder='Напиши загадку'
					onChange={event => setTextInInput(event.target.value)}
				/>
				<button
					onClick={e => {
						e.preventDefault()
						ask()
					}}
				>
					Разгадать!
				</button>
			</form>
			<div className={style.responsetext}></div>

			<div className={style.imgs}>
				<img src='/productAI/peoples.png' alt='плохое интернет соединение' />
				{text ? (
					<div className={style.responsetext}>{text}</div>
				) : (
					<img src='/productAI/text.png' alt='плохое интернет соединение' />
				)}
			</div>
			<ToastContainer />
		</div>
	)
}

export default SectionInput
