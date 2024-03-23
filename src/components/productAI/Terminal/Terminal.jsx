import { ReactTerminal } from 'react-terminal'

export default function TerminalInterface() {
	const commands = {
		разработчик: 'github.com/kolen44',
		отзыв: directory => `Спасибо за ваш отзыв! ${directory}`,
	}
	return (
		<ReactTerminal
			prompt={'name'}
			shortcuts={{
				'darwin,win,linux': {
					'ctrl + a': 'echo whoo',
				},
			}}
			commands={commands}
		/>
	)
}
