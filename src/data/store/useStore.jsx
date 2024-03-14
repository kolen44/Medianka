import { create } from 'zustand'

export const useStores = create((set, get) => ({
	responseText: false,
	loadingSpeak: false,
	chatGPTResponseBoolean: false,
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
