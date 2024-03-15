import { YandexGPT } from '@langchain/yandex/llms'
import cors from 'cors'

export async function YaGPT(text) {
	const model = new YandexGPT({
		apiKey: 'AQVNyymvyRxLMc1pw_M6m9tXuQUvv1_JtN0Iv9aX',
		folderID: 'b1got6mvjila3lv39i94',
	})
	const res = await model.invoke([`${text}`])
	return { res }
}

const express = require('express')

const app = express()

app.use(cors())

app.post(
	'https://llm.api.cloud.yandex.net/foundationModels/v1/completion',
	async (req, res) => {
		const { text } = req.body
		const model = new YandexGPT({
			apiKey: 'your_token',
			folderID: 'b1got6mvjila3lv39i94',
		})

		try {
			const result = await model.invoke([text])
			res.json({ result })
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
)

app.listen(3000, () => {
	console.log('Server is running on port 3000')
})
