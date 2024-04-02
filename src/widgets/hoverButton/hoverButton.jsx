import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const HoverButton = ({ text }) => {
	const btnEntity = useRef(null)
	const spanInBtnEntity = useRef(null)

	useEffect(() => {
		const handleMouseMove = e => {
			const { width } = e.target.getBoundingClientRect()
			const offset = e.offsetX
			const left = `${(offset / width) * 100}%`

			spanInBtnEntity.current.animate(
				{ left },
				{ duration: 250, fill: 'forwards' }
			)
		}

		const handleMouseLeave = () => {
			spanInBtnEntity.current.animate(
				{ left: '50%' },
				{ duration: 100, fill: 'forwards' }
			)
		}

		btnEntity.current.addEventListener('mousemove', handleMouseMove)
		btnEntity.current.addEventListener('mouseleave', handleMouseLeave)
	}, [])

	return (
		<a href='/'>
			<motion.button
				whileTap={{ scale: 0.985 }}
				ref={btnEntity}
				className='relative w-full max-w-xs overflow-hidden rounded-lg bg-#7e22ce px-8 py-3 text-lg font-medium text-white'
			>
				<span className='pointer-events-none relative z-10 mix-blend-difference'>
					{text}
				</span>

				<span
					ref={spanInBtnEntity}
					className='pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100'
				/>
			</motion.button>
		</a>
	)
}
