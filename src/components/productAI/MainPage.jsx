'use client'
import '@/app/globals.css'
import { ExampleWrapper } from '@/widgets/confidenceModal/confidenceModal'
import style from '../../styles/productAI/MainPage.module.css'
import { Footer } from './Footer/Footer'
import Header from './Header/Header'
import SectionInput from './InputSuggest/SectionInput'
import MapInfo from './Map&Info/MapInfo'
import Slider from './Slider/Slider'

const MainPage = () => {
	return (
		<div className={style.main}>
			<ExampleWrapper />
			<Header />
			<SectionInput />
			<Slider />
			<MapInfo />
			<Footer />
		</div>
	)
}

export default MainPage
