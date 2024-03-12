import OpenAI from 'openai'

const CHATGPT_MODEL = 'gpt-3.5-turbo'

const ROLES = {
	ASSISTANT: 'assistant',
	SYSTEM: 'system',
	USER: 'user',
}

const openai = new OpenAI({
	apiKey: import.meta.env.VITE_CHATGPT,
	dangerouslyAllowBrowser: true,
})

const getMessage = text => `
на основе этого текста постарайся предположить какое действие из представленных имел ввиду пользователь . ответ дай цифрой без букв.
1.прыжок
2.плавание
3. удар
`

export async function ChatGPT(text) {
	const messages = [
		{
			role: ROLES.SYSTEM,
			content: 'Ты опытный человек который определяет действия ',
		},
		{
			role: ROLES.USER,
			content: getMessage(),
		},
	]
	try {
		const response = await openai.chat.completions.create({
			messages,
			model: CHATGPT_MODEL,
		})
		return response.choices[0].message.content
	} catch (error) {
		console.error(error.message)
	}
}
