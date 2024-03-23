'use client'
import { BubbleText } from '@/widgets/bubbleText/bubble'
import style from '../../../styles/productAI/MapInfo.module.css'
import Castle from './Castle3d/Castle'

const text = `B таинственном замке, стоящем на вершине Медной Горы, обитала змея по имени Медянка. Она знала все тайны и загадки замка, бывала в каждой
его комнате, скрытом уголке и сокрытом стеклянном лабиринте. Лишь
изредка смелые отваживались подняться на Медную Гору и войти в замок,
жаждущие узнать его тайны. Те, кто встречал Медянку, видели в её
глазах отражение прошлого, настоящего и даже будущего. И так, до сих
пор Медянка живёт в замке на Медной Горе, каждый раз охраняя его
сокровища и мудро храня старые легенды, которыми она с радостью может
поделиться!`

const MapInfo = () => {
	return (
		<div className={style.mapDiv}>
			<div className={style.castle}>
				<Castle />
			</div>
			<div className={style.text}>
				<h1>
					<BubbleText text={`Однажды...`} />
				</h1>
				<h2>
					<BubbleText text={text} />
				</h2>
			</div>
		</div>
	)
}

export default MapInfo
