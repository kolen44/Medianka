import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export async function handlerSendYaGPT(props) {
	try {
		const requestText = props
		console.log(requestText)
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
		toast.update(id, {
			render: 'Ответ сгенерирован !',
			type: 'success',
			isLoading: false,
			autoClose: 5000,
		})
		return responseText
	} catch (error) {
		toast.error('На сервере ошибка !', {
			position: 'top-left',
		})
		console.log(error)
	}
}
