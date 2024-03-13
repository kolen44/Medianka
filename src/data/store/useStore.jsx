import { create } from 'zustand'

export const useStores = create((set, get) => ({
	responseText: false,
	chatGPTResponseBoolean: false,
	setTrueResponse: () => {
		set(state => ({
			chatGPTResponseBoolean: true,
		}))
	},
	setPromptText: text => {
		set(state => ({
			responseText: text,
		}))
	},
}))
