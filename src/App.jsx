import { useState } from 'react'
import './App.css'
import Experience from './components/Experience'
import SpeechToText from './components/SpeechToText'
import { YMaps, Placemark, Map, SearchControl } from '@pbe/react-yandex-maps'

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
				{!opened ? "Открыть карту" : "закрыть карту"}
			</button>
			{opened &&
				<div className='maps'>
					<YMaps>
						<div style={{ width: '300px', height: '300px' }}>
							<Map
								defaultState={{ center: [56.85, 60.61], zoom: 10 }}
								options={{ maxZoom: 19 }}
							>
								<Placemark geometry={[56.85, 60.61]} />
								<SearchControl options={{ float: 'right' }} />
							</Map>
						</div>
					</YMaps>
				</div>}
		</>
	)
}

export default App
