import style from './MapInfo.module.css'
// import { YMaps, Map, Placemark, SearchControl } from 'react-yandex-maps';

const MapInfo = () => {
	return (
		<div className={style.mapDiv}>
			<div className={style.main}>
				<div>
					<h3 className={style.h3}>Интерактивная карта</h3>
					<p className={style.text}>
						Эта карта будет полезна для туристов, жителей города или просто для
						людей, которые хотят получить информацию о конкретном районе или
						месте.
					</p>
				</div>
				<div>
					<h3 className={style.h3}>Что посмотреть?</h3>
					<div className={style.menu}>
						<div>
							<p>Парки</p>
							<p>Достопримечательности</p>
							<p>Гостиницы</p>
							<p>Аптеки</p>
						</div>
						<div>
							<p>Интерактивные площадки</p>
							<p>Торговые центры</p>
							<p>Банкоматы</p>
							<p>Транспорт</p>
						</div>
					</div>
				</div>
				<button>Поиск</button>
			</div>
			<div>
				<p>Тут будет карта</p>
				{/* <YMaps>
					<div style={{ width: '300px', height: '300px' }}>
						<Map
							defaultState={{ center: [56.85, 60.61], zoom: 10 }}
							options={{ maxZoom: 19 }}
						>
							<Placemark geometry={[56.85, 60.61]} />
							<SearchControl options={{ float: 'right' }} />
						</Map>
					</div>
				</YMaps> */}
			</div>
		</div>
	)
}

export default MapInfo
