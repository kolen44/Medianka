import styles from '@/styles/bubble/bubble.module.css'
export const BubbleText = ({ text }) => {
	return (
		<>
			{text.split('').map((child, idx) => (
				<span className={styles.hoverText} key={idx}>
					{child}
				</span>
			))}
		</>
	)
}
