import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowRight, FiChevronDown, FiHome, FiPieChart } from 'react-icons/fi'

export const ShiftingDropDown = () => {
	return <Tabs />
}

const Tabs = () => {
	const [selected, setSelected] = useState(null)
	const [dir, setDir] = useState(null)

	const handleSetSelected = val => {
		if (typeof selected === 'number' && typeof val === 'number') {
			setDir(selected > val ? 'r' : 'l')
		} else if (val === null) {
			setDir(null)
		}

		setSelected(val)
	}

	return (
		<div
			onMouseLeave={() => handleSetSelected(null)}
			className='relative flex h-fit gap-2'
		>
			{TABS.map(t => {
				return (
					<Tab
						key={t.id}
						selected={selected}
						handleSetSelected={handleSetSelected}
						tab={t.id}
					>
						{t.title}
					</Tab>
				)
			})}

			<AnimatePresence>
				{selected && <Content dir={dir} selected={selected} />}
			</AnimatePresence>
		</div>
	)
}

const Tab = ({ children, tab, handleSetSelected, selected }) => {
	return (
		<button
			id={`shift-tab-${tab}`}
			onMouseEnter={() => handleSetSelected(tab)}
			onClick={() => handleSetSelected(tab)}
			className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
				selected === tab
					? ' bg-purple-700 text-neutral-100'
					: 'text-neutral-600'
			}`}
		>
			<span>{children}</span>
			<FiChevronDown
				className={`transition-transform ${
					selected === tab ? 'rotate-180' : ''
				}`}
			/>
		</button>
	)
}

const Content = ({ selected, dir }) => {
	return (
		<motion.div
			id='overlay-content'
			initial={{
				opacity: 0,
				y: 8,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			exit={{
				opacity: 0,
				y: 8,
			}}
			className='absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-fuchsia-700 via-purple-600 to-purple-950 p-4'
		>
			<Bridge />
			<Nub selected={selected} />

			{TABS.map(t => {
				return (
					<div className='overflow-hidden' key={t.id}>
						{selected === t.id && (
							<motion.div
								initial={{
									opacity: 0,
									x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
								}}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.25, ease: 'easeInOut' }}
							>
								<t.Component />
							</motion.div>
						)}
					</div>
				)
			})}
		</motion.div>
	)
}

const Bridge = () => (
	<div className='absolute -top-[24px] left-0 right-0 h-[24px]' />
)

const Nub = ({ selected }) => {
	const [left, setLeft] = useState(0)

	useEffect(() => {
		moveNub()
	}, [selected])

	const moveNub = () => {
		if (selected) {
			const hoveredTab = document.getElementById(`shift-tab-${selected}`)
			const overlayContent = document.getElementById('overlay-content')

			if (!hoveredTab || !overlayContent) return

			const tabRect = hoveredTab.getBoundingClientRect()
			const { left: contentLeft } = overlayContent.getBoundingClientRect()

			const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft

			setLeft(tabCenter)
		}
	}

	return (
		<motion.span
			style={{
				clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)',
			}}
			animate={{ left }}
			transition={{ duration: 0.25, ease: 'easeInOut' }}
			className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900'
		/>
	)
}

const Products = () => {
	return (
		<div>
			<div className='flex justify-center'>
				<div>
					<h3 className='mb-2 text-sm font-medium'>API YandexGPT</h3>
					<a
						href='https://cloud.yandex.ru/ru/docs/yandexgpt/quickstart'
						className='mb-1 block text-sm text-neutral-400'
					>
						Быстрый старт
					</a>
					<a
						href='https://cloud.yandex.ru/ru/docs/yandexgpt/api-ref/authentication'
						className='block text-sm text-neutral-400'
					>
						Аутентификация API
					</a>
				</div>
			</div>

			<button className='ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300'>
				<a href='https://cloud.yandex.ru/ru/docs/yandexgpt/concepts/'>
					<span>Больше</span>
				</a>

				<FiArrowRight />
			</button>
		</div>
	)
}

const Pricing = () => {
	return (
		<div className='grid grid-cols-2 gap-4 divide-x divide-neutral-700'>
			<a
				href='https://github.com/kolen44/Medianka/discussions/categories/ideas'
				className='flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50'
			>
				<FiHome className='mb-2 text-xl text-indigo-300' />
				<span className='text-xs'>Предложить идею</span>
			</a>
			<a
				href='https://github.com/kolen44/Medianka/discussions/categories/show-and-tell'
				className='flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50'
			>
				<FiPieChart className='mb-2 text-xl text-indigo-300' />
				<span className='text-xs'>Вопрос</span>
			</a>
		</div>
	)
}

const Blog = () => {
	return (
		<div>
			<div className=''>
				<a href='https://github.com/kolen44/Medianka'>
					<img
						className='mb-2 h-14 w-full rounded object-cover'
						src='/productAI/github.jpg'
						alt='Placeholder image'
					/>
					<h4 className='mb-0.5 text-sm font-medium'>Помочь в разработке</h4>
					<p className='text-xs text-neutral-400'>
						Данный проект это open-source разработка . Любой человек может
						внести свой вклад)
					</p>
				</a>
			</div>
			<button className='ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300'>
				<a href='https://github.com/kolen44/Medianka#installation'>
					<span>Установка</span>
				</a>

				<FiArrowRight />
			</button>
		</div>
	)
}

const TABS = [
	{
		title: 'AI API',
		Component: Products,
	},
	{
		title: 'Коммуникация',
		Component: Pricing,
	},
	{
		title: 'Разработка',
		Component: Blog,
	},
].map((n, idx) => ({ ...n, id: idx + 1 }))
