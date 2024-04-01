import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Medianka',
	description: 'Медянка ИИ',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<link
				rel='icon'
				href='/favicon/favicon-32x32.png'
				type='image/<generated>'
				sizes='32'
			/>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
