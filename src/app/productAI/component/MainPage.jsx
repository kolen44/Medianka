import Comeback from './Comeback'
import Footer from './Footer'
import Header from './Header'
import style from './Header.module.css'
import MapInfo from './MapInfo'
import QrCode from './QrCode'
import SectionInput from './SectionInput'
import Slider from './Slider'

const MainPage = () => {
	return (
		<div className={style.main}>
			<Header />
			<SectionInput />
			<Slider />
			<MapInfo />
			<QrCode />
			<Comeback />
			<Footer />
		</div>
	)
}

export default MainPage
