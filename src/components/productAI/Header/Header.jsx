'use client'
import { BubbleText } from '@/widgets/bubbleText/bubble'
import ButtonWrapper from '@/widgets/hoverButton/hoverButton'
import { ShiftingDropDown } from '@/widgets/linksHeader/links'
import Link from 'next/link'
import style from '../../../styles/productAI/Header.module.css'

const Header = () => {
	return (
		<div className={style.head}>
			<div className={style.header}>
				<p className={style.logo}>
					<BubbleText text={`Медянка`} />
				</p>
				<div className={style.nav}>
					<ShiftingDropDown />
				</div>
				<ButtonWrapper text={'Начать'} />
			</div>
			<p className={style.mainText}>
				<BubbleText text={`НЕЙРОСЕТЬ ДЛЯ КАЖДОГО`} />
			</p>
			<div className={style.card}>
				<img src='/productAI/profile.png' alt='фото профиля' />
				<div>
					<h2>Добро пожаловать! Я медянка</h2>
					<p className={style.about}>
						НейроПомощник,который поможет вам и вашим детям узнавать что-то
						новое каждый день. Давайте начнем приключение!
					</p>
					<div className={style.btns}>
						<a href='https://dzen.ru/a/ZPwptT1fPn8vjEr-'>
							<button className={style.more}>Узнать больше</button>
						</a>

						<a href='https://itproger.com/news/kak-rabotaet-ii-printsipi-raboti-sovremennogo-ai'>
							<button>Как это работает?</button>
						</a>
					</div>
				</div>
			</div>
			<div className={style.medText}>
				<p className={style.med}>Привет, меня зовут Медянка! Давай поиграем?</p>
				<Link href={'/'}>
					<img src='/productAI/yellow.png' alt='плохое интернет соединение' />
				</Link>
			</div>
		</div>
	)
}

export default Header
