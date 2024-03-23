import { handlerSendYaGPT } from '@/feautures/productAI/handlerSendYaGPT'
import { BubbleText } from '@/widgets/bubbleText/bubble'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import style from '../../../styles/productAI/SectionInput.module.css'

const SectionInput = () => {
	const [text, setText] = useState(false)

	async function ask() {
		const requestText = document.getElementById('game4two').value
		const res = await handlerSendYaGPT(requestText)
		setText(res)
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
