import { create } from 'zustand'

export const useStores = create((set, get) => ({
	responseText: false,
	blockquotesFromYandexGPT: '',
	loadingSpeak: false,
	chatGPTResponseBoolean: false,
	setBlockquotesFromYandexGPT: (text) => {
		set(state => ({
			blockquotesFromYandexGPT: text,
		}))
	},
	setTrueResponse: () => {
		set(state => ({
			chatGPTResponseBoolean: true,
		}))
	},
	setLoadingSpeak: boolean => {
		set(state => ({
			loadingSpeak: boolean,
		}))
	},
	setPromptText: text => {
		set(state => ({
			responseText: text,
		}))
	},
}))
