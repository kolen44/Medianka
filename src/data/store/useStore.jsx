import { create } from 'zustand'

export const useStores = create((set, get) => ({
	responseText: false,
	blockquotesFromYandexGPT: '',
	loadingSpeak: false,
	timeToSpeak: false,
	chatGPTResponseBoolean: false,
	setBlockquotesFromYandexGPT: text => {
		set(state => ({
			blockquotesFromYandexGPT: text,
		}))
	},
	setTimeToSpeak: boolean => {
		set(state => ({
			timeToSpeak: boolean,
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
