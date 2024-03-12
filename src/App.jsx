import { useState } from 'react'
import './App.css'
import Experience from './components/Experience'
import SpeechToText from './components/SpeechToText'
import { YMaps, Placemark, Map } from '@pbe/react-yandex-maps'

function App() {

	const [opened, setOpened] = useState(false)

	function handleClick() {
		setOpened(!opened)
	}

	return (
		<>
			<div className='canvas3d'>
				<Experience />
				<SpeechToText />
			</div>
			<button onClick={handleClick} className='btn map'>
				Открыть карту
			</button>
			{opened &&
				<div className='maps'>
					<YMaps>
						<Map width={'300px'} defaultState={{ center: [56.85, 60.61], zoom: 10 }} modules={["control.ZoomControl", "control.FullscreenControl"]} />
						<Placemark defaultGeometry={[56.85, 60.61]} />
					</YMaps>
				</div>}
		</>
	)
}

export default App
