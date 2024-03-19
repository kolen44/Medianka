import { create } from 'zustand'

export const useEmailData = create((set, get) => ({
	emailData: '',
	setEmailData: data => {
		set(state => {
			emailData: data
		})
	},
}))
