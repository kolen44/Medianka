import { YandexGPT } from '@langchain/yandex/llms'

export async function YaGPT() {
	const model = new YandexGPT({
		iamToken: 'dn25qi2p1l89fvumhd4h',
		folderID: 'default',
	})
	const res = await model.invoke([
		'Translate "I love programming" into French.',
	])
	return { res }
}
