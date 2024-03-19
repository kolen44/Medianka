import style from './Footer.module.css'

const Footer = () => {
	return (
		<div className={style.container}>
			<div>
				<h2>АйтиВин.</h2>
				<p>
					Обрабатывает данные, принимать решения, а также применяется для
					распознавания образов и управляет процессами.
				</p>
			</div>
			<div className={style.main}>
				<div>
					<h3>Ссылки</h3>
					<p>О технологии</p>
					<p>Сообщество</p>
					<p>Сервис</p>
				</div>
				<div>
					<h3>Поддержка</h3>
					<p>Feedback</p>
					<p>Telegram</p>
				</div>
				<div>
					<h3>Контакты</h3>
					<p>8(989)123-41-56</p>
					<p>pochta@gmail.com</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
