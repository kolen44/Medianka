import axios from 'axios'
import { NextResponse } from 'next/server'

export const POST = async (req, res) => {
	const text = await req.json()
	const folder_id = 'b1got6mvjila3lv39i94'
	const yandexgpt_key = process.env.TOKEN_Yandex

	try {
		const response = await axios.post(
			`https://llm.api.cloud.yandex.net/foundationModels/v1/completion`,

			{
				crossdomain: true,
				modelUri: `gpt://${folder_id}/yandexgpt/latest`,
				completionOptions: {
					stream: false,
					temperature: 0.6,
					maxTokens: '2000',
				},
				messages: [
					{
						role: 'system',
						text: text.system
							? text.system
							: 'Ты нейросеть которая максимально точно и без воды дает ответ на вопрос пользователя',
					},
					{
						role: 'user',
						text: `${text.text}`,
					},
				],
			},
			{
				headers: {
					Authorization: `Api-Key ${yandexgpt_key}`,
					'x-folder-id': folder_id,
				},
			}
		)
		return new NextResponse(
			JSON.stringify(response.data.result.alternatives[0]['message']['text']),
			{
				status: 200,
			}
		)
	} catch (err) {
		console.log(err)
	}
}
