import style from '../../../styles/productAI/QrCode.module.css'

const QrCode = () => {
	return (
		<div className={style.bodycard}>
			<div className={style.card}>
				<div className={style.main}>
					<h2>Скорее скачивай наше приложение!</h2>
					<p>
						Полезный и удобный НейроПомощник в вашем смартфоне. Поможет вам и
						вашим детям узнавать что-то новое каждый день.
					</p>
					<button className={style.btn}>Скачать</button>
				</div>
				<img src='/productAI/qr-code.png' alt='' />
			</div>
		</div>
	)
}

export default QrCode
