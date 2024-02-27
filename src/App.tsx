import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision'
import { useGLTF } from '@react-three/drei'
import { Canvas, useGraph } from '@react-three/fiber'
import { useEffect } from 'react'
import { Color } from 'three'
import './App.css'

let video: HTMLVideoElement,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	faceLandmarker: FaceLandmarker,
	lastVideoTime = -1

function App() {
	function handleOnChange() {}

	const setup = async () => {
		const vision = await FilesetResolver.forVisionTasks(
			// path/to/wasm/root
			'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
		)
		faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
			baseOptions: {
				modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
				delegate: 'GPU',
			},
			outputFaceBlendshapes: true,
			outputFacialTransformationMatrixes: true,
			runningMode: 'VIDEO',
		})
		video = document.getElementById('video') as HTMLVideoElement
		navigator.mediaDevices
			.getUserMedia({
				video: { width: 1280 },
			})
			.then(stream => {
				video.srcObject = stream
				video.addEventListener('loadeddata', predict)
			})
	}

	const predict = () => {
		const nowInMs = Date.now()
		if (lastVideoTime !== video.currentTime) {
			lastVideoTime = video.currentTime
			const result = faceLandmarker.detectForVideo(video, nowInMs)
			console.log(result)
		}
		requestAnimationFrame(predict)
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
		'https://models.readyplayer.me/65ddfac21699818a1b71f6e3.glb?morphTargets=ARKit&textureAtlas=1024'
	)
	const { nodes } = useGraph(avatar.scene)
	return <primitive object={avatar.scene} position={[0, -1.65, 4]} />
}

export default App
