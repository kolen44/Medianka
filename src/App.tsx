import {
	Category,
	FaceLandmarker,
	FilesetResolver,
} from '@mediapipe/tasks-vision'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useGraph } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { Color, Euler, Matrix4, SkinnedMesh } from 'three'
import './App.css'

let video: HTMLVideoElement,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	faceLandmarker: FaceLandmarker,
	lastVideoTime = -1,
	headMesh: SkinnedMesh,
	rotation: Euler,
	blandshapes: Category[] = []

function App() {
	const [url, setUrl] = useState<string>(
		'https://models.readyplayer.me/65ddfac21699818a1b71f6e3.glb'
	)
	function handleOnChange(e: any) {
		setUrl(e.target.value)
	}

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
			if (
				result.facialTransformationMatrixes &&
				result.facialTransformationMatrixes.length > 0 &&
				result.faceBlendshapes &&
				result.faceBlendshapes.length > 0
			) {
				const matrix = new Matrix4().fromArray(
					result.facialTransformationMatrixes![0].data
				)
				rotation = new Euler().setFromRotationMatrix(matrix)

				blandshapes = result.faceBlendshapes[0].categories
			}
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
				<Avatar url={url} />
			</Canvas>
		</div>
	)
}

function Avatar({ url }: { url: string }) {
	const avatar = useGLTF(`${url}?morphTargets=ARKit&textureAtlas=1024`)
	const { nodes } = useGraph(avatar.scene)

	useEffect(() => {
		headMesh = nodes.Wolf3D_Avatar as SkinnedMesh
	}, [nodes])

	useFrame((_, delta) => {
		if (headMesh !== 0) {
			blandshapes.forEach(blandshape => {
				let index = headMesh.morphTargetDictionary![blandshape.categoryName]
				if (index >= 0) {
					headMesh.morphTargetInfluences![index] = blandshape.score
				}
			})
		}

		nodes.Head.rotation.set(
			rotation.x / 2.86,
			rotation.y / 2.86,
			rotation.z / 2.86
		)
		nodes.Neck.rotation.set(
			rotation.x / 2.86,
			rotation.y / 2.86,
			rotation.z / 2.86
		)
		nodes.Spine1.rotation.set(
			rotation.x / 2.86,
			rotation.y / 2.86,
			rotation.z / 2.86
		)
	})

	return <primitive object={avatar.scene} position={[0, -1.65, 4]} />
}

export default App
