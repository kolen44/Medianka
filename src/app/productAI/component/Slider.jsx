import style from './Slider.module.css'

const Slider = () => {
	return (
		<div className={style.main}>
			<p className={style.text}>Как я могу помочь?</p>
			<div className={style.slaider}>
				<div className={style.card}>
					<img src='/productAI/read.png' alt='' />
					<h4>Интерактивные истории</h4>
					<p>
						Я предоставлю доступ детям и взрослым к интересным сказкам, мифам, а еще другим историям о природе, животных и птицах во время прогулок.
					</p>
				</div>
				<div className={style.card}>
					<img src='/productAI/translate.png' alt='' />
					<h4>Перевод текста</h4>
					<p>
						Я могу помочь в переводе текста с одного языка на другой.
						Я способна анализировать большие объемы информации на иностранном языке и пересказывать их.
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
					<h4>Интерактивные игры</h4>
					<p>
						Я разработаю игры, стимулирующие активность на детской площадке,
						способствующие физическому и умственному развитию.
					</p>
				</div>
				<div className={style.card}>
					<img src='/productAI/ways.jpg' alt='' />
					<h4>Образовательные маршруты</h4>
					<p>
						Я способна создавать образовательные маршруты для прогулок,
						включающие интересные факты и достопримечательности по маршруту.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Slider
