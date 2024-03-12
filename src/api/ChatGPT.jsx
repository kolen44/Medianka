import OpenAI from 'openai'

const CHATGPT_MODEL = 'gpt-3.5-turbo-16k'

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
на основе следующего высказывания -  ${text} , определи что имел ввиду его автор из предложенных вариантов : 
1. прыжок
2. танец
3. удар. 
Ответ верни цифрой

`

export async function ChatGPT(text) {
	const messages = [
		{
			role: ROLES.SYSTEM,
			content:
				'Ты опытный человек который определяет значения выражений и дает ответ только в цифрах',
		},
		{
			role: ROLES.USER,
			content: getMessage(text),
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
