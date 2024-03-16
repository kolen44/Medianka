import style from './MapInfo.module.css'

const MapInfo = () => {
	return (
		<div className={style.mapDiv}>
			<div className={style.main}>
				<div>
					<h3>Интерактивная карта</h3>
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
				<p>тут будет карта</p>
			</div>
		</div>
	)
}

export default MapInfo
