import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export async function YaGPTSend(requestText) {
	const url = '/api/YandexGPT'
	let postBody = {
		text: requestText,
	}
	if (requestText.length > 2) {
		const id = toast.loading('Нейросеть генерирует ответ...', {
			position: 'top-right',
		})
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(postBody),
		})
		const final = await res.json()
		toast.update(id, {
			render: 'Ответ сгенерирован !',
			type: 'success',
			isLoading: false,
			autoClose: 5000,
		})
		return final
	} else {
		return toast.error('Нужно больше информации!', {
			position: 'top-left',
		})
	}
}
