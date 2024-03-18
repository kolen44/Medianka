'use client'
import Castle from './Castle3d/Castle'
import style from './MapInfo.module.css'

const MapInfo = () => {
	return (
		<div className={style.mapDiv}>
			<div className={style.castle}>
				<Castle />
			</div>
		</div>
	)
}

export default MapInfo
