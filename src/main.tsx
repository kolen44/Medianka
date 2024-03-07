import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/AvatarCanvas.css'
import AvatarCanvas from './components/AvatarCanvas.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='canvas3d'>
			<AvatarCanvas />
		</div>
	</React.StrictMode>
)
