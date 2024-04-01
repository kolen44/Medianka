import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi'

export const ExampleWrapper = () => {
	return <SpringModal />
}

const SpringModal = () => {
	const [scroll, setScroll] = useState('hidden')
	const [confidenceVisibleBoolean, setConfidenceVisibleBoolean] = useState(true)
	useEffect(() => {
		if (localStorage.getItem('confidenceVisibleBoolean') == null) {
			setConfidenceVisibleBoolean(true)
			document.body.style.overflowY = scroll
		} else {
			setConfidenceVisibleBoolean(false)
		}
	}, [])

	return (
		<AnimatePresence>
			{confidenceVisibleBoolean && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setIsOpen(false)}
					className='bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer'
				>
					<motion.div
						initial={{ scale: 0, rotate: '12.5deg' }}
						animate={{ scale: 1, rotate: '0deg' }}
						exit={{ scale: 0, rotate: '0deg' }}
						onClick={e => e.stopPropagation()}
						className='bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden'
					>
						<FiAlertCircle className='text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24' />
						<div className='relative z-10'>
							<div className='bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto'>
								<FiAlertCircle />
							</div>
							<h3 className='text-xl md:text-3xl font-bold text-center mb-2'>
								Политика конфиденциальности!
							</h3>
							<p className='text-center mb-6'>
								Соглашаясь вы принимаете нашу политику конфиденциальности и
								даете согласие на обработку cookie.
							</p>
							<div className='flex gap-2'>
								<button
									onClick={() => setIsOpen(false)}
									className='bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-1/2 md:w-full py-2 rounded pointer-events-auto'
								>
									<a href='https://github.com/kolen44/Medianka/blob/main/confidence.md'>
										Политика конфиденциальности
									</a>
								</button>
								<button
									onClick={() => {
										setConfidenceVisibleBoolean(false),
											setScroll('auto'),
											localStorage.setItem('confidenceVisibleBoolean', 'false')
									}}
									className='bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-1/2 md:w-full py-2 rounded pointer-events-auto'
								>
									Соглашаюсь!
								</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
