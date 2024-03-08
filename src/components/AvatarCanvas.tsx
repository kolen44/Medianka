import {
	Html,
	OrbitControls,
	Preload,
	useAnimations,
	useGLTF,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { MyLoader } from './MyLoader'

const Avatar = () => {
	const [url, setUrl] = useState('/praying.glb')
	const avatar = useGLTF(url)
	const [index, setIndex] = useState(1)
	const { actions, names } = useAnimations(avatar.animations, avatar.scene)
	const [isClicked, setClicked] = useState(false)
	useEffect(() => {
		actions[names[index]]?.reset().fadeIn(0.5).play()
		return () => {
			actions[names[index]]?.fadeOut(0.5)
		}
	}, [index, actions, names])
	return (
		<group>
			<primitive
				object={avatar.scene}
				scale={2}
				position-y={-2}
				rotation-y={-0.5}
				position-x={[-1]}
				dispose={null}
			/>
			<Html position={[-3.7, 0.3, 0]}>
				<button
					onClick={() => {
						setIndex((index + 1) % names.length)
						setClicked(!isClicked)
					}}
				>
					Click me
				</button>
			</Html>
		</group>
	)
}

export default function AvatarCanvas() {
	return (
		<Canvas dpr={[0, 2]}>
			<ambientLight intensity={0.5} />
			<pointLight position={[1, 1, 1]} />
			<OrbitControls enabled={true} />

			<Suspense fallback={<MyLoader />}>
				<Avatar />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}
