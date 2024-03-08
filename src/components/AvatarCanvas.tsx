import { Html, OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'

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
				position={[-1, -2, 0]}
				rotation-y={0.5}
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
		<Canvas>
			<pointLight position={[0, 1.5, 0]} intensity={1.5} />
			<ambientLight intensity={0.5} position={[1, 1.8, 2]} />
			<OrbitControls position={[1, 1, 1]} />

			<Avatar />
		</Canvas>
	)
}
