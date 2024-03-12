import { YandexGPT } from '@langchain/yandex/llms'

export async function YaGPT() {
	const model = new YandexGPT({
		apiKey: 'AQVNwgiAlimoySIAkOOEDB5XxpKx_W_ULoyABeA7',
		folderID: 'b1gev18uirpgvlspbmj2',
	})
	const res = await model.invoke([
		'Translate "I love programming" into French.',
	])
	return { res }
}
