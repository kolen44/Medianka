import style from './Comeback.module.css'

const Comeback = () => {
	return (
		<div className={style.card}>
			<h1>
				Напишите <br />
				свои предложения
			</h1>
			<div>
				<input type='text' className={style.input} placeholder='Предлагаю...' />
				<button>Отправить</button>
			</div>
		</div>
	)
}

export default Comeback
