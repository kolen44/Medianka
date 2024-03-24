import { create } from 'zustand'

export const navStore = create((set, get) => ({
	pageNumber: 1,
	setPageNumber: number => {
		set(state => ({
			pageNumber: number,
		}))
	},
}))
