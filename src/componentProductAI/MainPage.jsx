'use client'
import Header from './Header/Header'
import SectionInput from './InputSuggest/SectionInput'
import style from './MainPage.module.css'
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
