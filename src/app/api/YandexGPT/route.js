import { NextResponse } from 'next/server'

export const POST = async (req, res) => {
	const text = req.body.text | 'lll'
	fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/completion', {
		method: "POST",
		headers: {
		  'Authorization': `Api-Key AQVNK_94THfP8yL`,
		  'Content-Type': 'application/json' // Добавляем заголовок Content-Type
		},
		body: JSON.stringify({
		  "modelUri": "gpt://b1got6mvjila3lv39i94/yandexgpt-lite",
		  "completionOptions": {
			"temperature": 0.6,
			"maxTokens": "2000"
		  },
		  "messages": [
			{
			  "role": "system",
			  "text": "Ты профессиональный математик"
			},
			{
			  "role": "user",
			  "text": `${text}`
			}
		  ]
		})
	  })
		.then(response => {
		  if (response.status === 200) {
			console.log(response)
		  }
		})
		.then(data => {
		  console.log(data)
		  return NextResponse.json(JSON.parse(data))
		}).catch(e => {
			console.log(e)
			return e
		})
}
