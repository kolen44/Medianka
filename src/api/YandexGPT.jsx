import { YandexGPT } from '@langchain/yandex/llms'

export async function YaGPT(text) {
	const model = new YandexGPT({
		apiKey: 'your token',
		folderID: 'b1got6mvjila3lv39i94',
	})
	const res = await model.invoke([`${text}`])
	return { res }
}
