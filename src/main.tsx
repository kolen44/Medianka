import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './components/AvatarCanvas.css'
import AvatarCanvas from './components/AvatarCanvas.tsx'
import SpeechToText from './components/SpeechToText.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='canvas3d'>
			<AvatarCanvas />
			<SpeechToText />
		</div>
	</React.StrictMode>
)
