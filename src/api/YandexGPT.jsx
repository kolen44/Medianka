import axios from 'axios'

const folder_id = 'default'
const yandexgpt_key = 'AQVNwgiAlimoySIAkOOEDB5XxpKx_W_ULoyABeA7'

const data = {
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
			text: 'Ламинат подойдет для укладке на кухне',
		},
	],
}

export async function main() {
	try {
		const response = await axios.post(
			`https://llm.api.cloud.yandex.net/foundationModels/v1/completion`,
			data,
			{
				headers: {
					Authorization: `Api-Key ${yandexgpt_key}`,
					'x-folder-id': folder_id,
				},
			}
		)
		console.log(response.status)
		console.log(JSON.stringify(response.data, null, 2))
	} catch (err) {
		console.error('error:', err)
	}
}

main()
