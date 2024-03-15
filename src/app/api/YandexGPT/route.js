import axios from 'axios'
import { NextResponse } from 'next/server'

export const POST = async (req, res) => {
	const text = req.body.text | 'text'
const folder_id = 'b1got6mvjila3lv39i94'
const yandexgpt_key = 'AQVN170ZNuJHpuN8ND1cVX5'

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
						text: 'Найди ошибки в тексте и исправь их',
					},
					{
						role: 'user',
						text: `${text}`,
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
		console.log(response.status)
		console.log(JSON.stringify(response.data.result.alternatives[0]["message"]["text"], null, 2))
		return new NextResponse(JSON.stringify(response.data.result.alternatives[0]["message"]["text"]), {
			status: 200
		});
	} catch (err) {
		console.error('error:', err)
	}
}
