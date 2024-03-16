import style from './SectionInput.module.css'

const SectionInput = () => {
	return (
		<div className={style.main}>
			<p className={style.text}>Что я умею?</p>
			<form className={style.form}>
				<input
					type='text'
					className={style.input}
					placeholder='Придумай игру для 2 человек'
				/>
				<button>Поиск</button>
			</form>
			<div className={style.imgs}>
				<img src='/productAI/peoples.png' alt='плохое интернет соединение' />
				<img src='/productAI/text.png' alt='плохое интернет соединение' />
			</div>
		</div>
	)
}

export default SectionInput
