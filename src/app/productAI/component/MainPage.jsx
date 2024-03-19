'use client'
import Comeback from './Comeback/Comeback'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import SectionInput from './InputSuggest/SectionInput'
import style from './MainPage.module.css'
import MapInfo from './Map&Info/MapInfo'
import QrCode from './QrCode/QrCode'
import Slider from './Slider/Slider'

const MainPage = () => {
	const handleClick = () => {
		window.scrollTo({
			top: window.scrollY + 1.19 * window.innerHeight, // прокручиваем на 100vh
			behavior: 'smooth', // добавляем плавную анимацию
		})
	}
	return (
		<div className={style.main}>
			<button
				className={style.scrollbutton}
				href='#sectioninput'
				onClick={handleClick}
			>
				Scroll
			</button>
			<Header />
			<SectionInput />
			<Slider />
			<MapInfo />
			<Comeback />
			<QrCode />
			<Footer />
		</div>
	)
}

export default MainPage
