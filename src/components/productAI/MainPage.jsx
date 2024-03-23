'use client'
import '@/app/globals.css'
import { ExampleWrapper } from '@/widgets/confidenceModal/confidenceModal'
import style from '../../styles/productAI/MainPage.module.css'
import Header from './Header/Header'
import SectionInput from './InputSuggest/SectionInput'
import MapInfo from './Map&Info/MapInfo'
import QrCode from './QrCode/QrCode'
import Slider from './Slider/Slider'

const MainPage = () => {
	return (
		<div className={style.main}>
			<ExampleWrapper />
			<Header />
			<SectionInput />
			<Slider />
			<MapInfo />
			<QrCode />
		</div>
	)
}

export default MainPage
