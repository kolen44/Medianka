'use client'
import '@/app/globals.css'
import { navStore } from '@/data/productAI/phoneVersion/store/navStore'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Header from './Header/Header'

import './main.css'

const MainPagePhone = () => {
	const Component = SelectedComponent()
	return (
		<div className='bg-slate-900  phoneVersionDiv'>
			<Header />
			<div className='mt-20 fixed'>
				<Suspense fallback={<div>Loading...</div>}>
					<Component className='p-10 absolute' />
				</Suspense>
			</div>
		</div>
	)
}

function SelectedComponent() {
	const componentMain = dynamic(() => import('./MainContent/Main'))
	const componentTrading = dynamic(() => import('./Trading/Trading'))
	const componentChat = dynamic(() => import('./Chat/Chat'))
	const componentAbout = dynamic(() => import('./About/About'))
	const componentProfile = dynamic(() => import('./Profile/Profile'))

	const pageNumber = navStore(store => store.pageNumber)
	const componentsMap = {
		1: componentMain,
		2: componentAbout,
		3: componentChat,
		4: componentTrading,
		5: componentProfile,
	}
	const SelectedComponent = componentsMap[pageNumber] || null
	return SelectedComponent
}

export default MainPagePhone
