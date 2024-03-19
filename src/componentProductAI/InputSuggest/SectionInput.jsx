'use client'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import style from './SectionInput.module.css'

const SectionInput = () => {
	const [text, setText] = useState(false)

	async function handlerSendYaGPT() {
		try {
			const requestText = document.getElementById('game4two').value
			if (requestText.length < 2) {
				return toast.warn('Введите сообщение !', {
					position: 'bottom-left',
				})
			}
			const id = toast.loading('Нейросеть генерирует ответ...', {
				position: 'top-right',
			})
			console.log(requestText)
			const url = '/api/YandexGPT'
			let postBody = {
				text: requestText,
				system:
					'Твоя задача разгадывать загадки . Ты работаешь профессиональным разгадывателем загадок и решаешь их каждый день . Дай ответ на следующую загадку:',
			}
			const res = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(postBody),
			})
			let responseText = await res.json()
			setText(responseText)
			toast.update(id, {
				render: 'Ответ сгенерирован !',
				type: 'success',
				isLoading: false,
				autoClose: 5000,
			})
		} catch (error) {
			toast.error('На сервере ошибка !', {
				position: 'top-left',
			})
			console.log(error)
		}
	}
	return (
		<div className={style.main} id='sectioninput'>
			<p className={style.text}>Что я умею?</p>
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
						handlerSendYaGPT()
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
