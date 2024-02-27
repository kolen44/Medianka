import { useGLTF } from '@react-three/drei'
import { Canvas, useGraph } from '@react-three/fiber'
import { useEffect } from 'react'
import { Color } from 'three'
import './App.css'

let video: HTMLVideoElement

function App() {
	function handleOnChange() {}

	const setup = () => {
		video = document.getElementById('video') as HTMLVideoElement
		navigator.mediaDevices
			.getUserMedia({
				video: { width: 1280 },
			})
			.then(stream => {
				video.srcObject = stream
			})
	}

	useEffect(() => {
		setup()
	}, [])
	return (
		<div className='App'>
			<input
				type='text'
				placeholder='Enter your RPM avatar URL'
				onChange={handleOnChange}
			/>
			<video autoPlay id='video' />
			<Canvas
				style={{
					backgroundColor: 'purple',
					height: 400,
				}}
				camera={{
					fov: 25,
				}}
			>
				<pointLight
					position={[1, 1, 1]}
					color={new Color(1, 0, 0)}
					intensity={0.5}
				/>
				<pointLight
					position={[-1, 0, 1]}
					color={new Color(0, 1, 0)}
					intensity={0.5}
				/>
				<ambientLight intensity={0.5} />
				<Avatar />
			</Canvas>
		</div>
	)
}

function Avatar() {
	const avatar = useGLTF(
		'https://models.readyplayer.me/65ddfac21699818a1b71f6e3.glb?morphTargets=ARKit'
	)
	const { nodes } = useGraph(avatar.scene)
	return <primitive object={avatar.scene} position={[0, -1.65, 4]} />
}

export default App
