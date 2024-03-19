'use client'
import Castle from './Castle3d/Castle'
import style from './MapInfo.module.css'

const MapInfo = () => {
	return (
		<div className={style.mapDiv}>
			<div className={style.castle}>
				<Castle />
			</div>
			<div className={style.text}>
				<h1>Однажды...</h1>
				<h2>
					B таинственном замке, стоящем на вершине Медной Горы, обитала змея по
					имени Медянка. Эта загадочная сущность была хранительницей замка и его
					сокровищ, она проникала в каждый уголок старинных стен, будто сами
					камни слушали её шепот. Медянка была мудрой и сильной, словно сама
					медь, из которой слеплен хрупкий каркас замка. Её глаза сверкали как
					медный рудник, полный тайн и тайн. Она знала все тайны и загадки
					замка, бывала в каждой его комнате, скрытом уголке и сокрытом
					стеклянном лабиринте. Лишь изредка смелые отваживались подняться на
					Медную Гору и войти в замок, жаждущие узнать его тайны. Те, кто
					встречал Медянку, видели в её глазах отражение прошлого, настоящего и
					даже будущего. И так, до сих пор Медянка живёт в замке на Медной Горе,
					каждый раз охраняя его сокровища и мудро храня старые легенды,
					которыми она с радостью может поделиться!
				</h2>
			</div>
		</div>
	)
}

export default MapInfo
