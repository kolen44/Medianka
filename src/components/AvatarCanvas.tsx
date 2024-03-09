import {
	Environment,
	Html,
	OrbitControls,
	Preload,
	useAnimations,
	useGLTF,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useLayoutEffect, useState } from 'react'
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

	useLayoutEffect(() => {
		Object.values(avatar.nodes).forEach(
			node => node && (node.receiveShadow = node.castShadow = true)
		)
	}, [avatar.nodes, avatar.materials])

	console.log(avatar)

	return (
		<group>
			<primitive
				material={avatar.materials.Wolf3D_Bodymat}
				object={avatar.scene}
				scale={2}
				rotation={[0, -0.5, 0]} // Предполагая, что вам нужен поворот по оси Y
				position={[-1, 0, -2]} // Предполагая, что модель должна быть смещена на -1 по X и -2 по Z
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
		<Canvas dpr={[1, 2]}>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} intensity={1.5} />
			<OrbitControls enabled={true} />
			<Suspense fallback={<MyLoader />}>
				<Avatar />
				<Environment preset='sunset' background={false} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}
