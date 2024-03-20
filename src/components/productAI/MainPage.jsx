'use client'
import style from '../../styles/productAI/MainPage.module.css'
import Header from './Header/Header'
import SectionInput from './InputSuggest/SectionInput'
import MapInfo from './Map&Info/MapInfo'
import QrCode from './QrCode/QrCode'
import Slider from './Slider/Slider'

const MainPage = () => {
	return (
		<div className={style.main}>
			<Header />
			<SectionInput />
			<Slider />
			<MapInfo />
			<QrCode />
		</div>
	)
}

export default MainPage
