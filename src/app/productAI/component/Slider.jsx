import style from './Slider.module.css'

const Slider = () => {
	return (
		<div className={style.main}>
			<p className={style.text}>Как я могу помочь?</p>
			<div className={style.slaider}>
				<div className={style.card}>
					<img src='/productAI/read.png' alt='' />
					<h4>Безопасность на улице</h4>
					<p>
						Я могу обучать детей правилам безопасного поведения на улице и
						дороге, предоставлять советы по обходу опасных ситуаций.
					</p>
				</div>
				<div className={style.card}>
					<img src='/productAI/translate.png' alt='' />
					<h4>Безопасность на улице</h4>
					<p>
						Я могу обучать детей правилам безопасного поведения на улице и
						дороге, предоставлять советы по обходу опасных ситуаций.
					</p>
				</div>
				<div className={style.card}>
					<img src='/productAI/way.png' alt='' />
					<h4>Безопасность на улице</h4>
					<p>
						Я могу обучать детей правилам безопасного поведения на улице и
						дороге, предоставлять советы по обходу опасных ситуаций.
					</p>
				</div>
				<div className={style.card}>
					<img src='/productAI/family.png' alt='' />
					<h4>Безопасность на улице</h4>
					<p>
						Я могу обучать детей правилам безопасного поведения на улице и
						дороге, предоставлять советы по обходу опасных ситуаций.
					</p>
				</div>
				<div className={style.card}>
					<img src='/productAI/ways.jfif' alt='' />
					<h4>Безопасность на улице</h4>
					<p>
						Я могу обучать детей правилам безопасного поведения на улице и
						дороге, предоставлять советы по обходу опасных ситуаций.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Slider
