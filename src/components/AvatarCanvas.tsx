import {
	Html,
	OrbitControls,
	Preload,
	TransformControls,
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
			<ambientLight
				intensity={100}
				position={avatar.scene.children[0].position}
			/>
			<TransformControls />
			<primitive
				metalness={1}
				object={avatar.scene}
				scale={2}
				rotation-y={-0.5}
				position-x={[-1]}
				position-z={[-2]}
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
