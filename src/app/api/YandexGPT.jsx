const handler = async (req, res) => {
	const text = req.body.text
	const response = await fetch(
		'https://llm.api.cloud.yandex.net/foundationModels/v1/completion',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Api-Key AQVN36TkHw7jurY7R40QwNJEKOJm_I3SkreHDlpb`,
				'x-folder-id': 'b1got6mvjila3lv39i94',
			},
			body: JSON.stringify({
				modelUri: `gpt://${YANDEX_FOLDER_ID}/yandexgpt-lite`,
				completionOptions: {
					stream: false,
					temperature: 0.1,
					maxTokens: '1000',
				},
				messages: [
					{
						role: 'system',
						text: 'Ответь на вопрос четко',
					},
					{
						role: 'user',
						text: `${text}`,
					},
				],
			}),
		}
	)
	console.log(data)
	const data = await response.json()
	return res.end(JSON.parse(JSON.stringify(data)))
}
