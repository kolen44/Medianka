'use client'
import { Environment, useAnimations, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useLayoutEffect, useState } from 'react'
import { MyLoader } from './MyLoader'

const Avatar = () => {
	const avatar = useGLTF('/praying.glb')
	const [index, setIndex] = useState(1)
	const { actions, names } = useAnimations(avatar.animations, avatar.scene)
	const [isClicked, setClicked] = useState(false)

	useEffect(() => {
		const actionName = names[index]
		const action = actions[actionName]
		action?.reset().fadeIn(0.5).play()
		return () => {
			action?.fadeOut(0.5)
		}
	}, [index, actions, names])

	useLayoutEffect(() => {
		Object.values(avatar.nodes).forEach(node => {
			if (node) {
				node.receiveShadow = node.castShadow = true
			}
		})
	}, [avatar.nodes, avatar.materials])
	return (
		<group>
			<Model url={'/praying.glb'} />
			{/* <Html>
				<button
					className='counter-button'
					onClick={() => {
						setIndex((index + 1) % names.length)
						setClicked(!isClicked)
					}}
				>
					Click me
				</button>
			</Html> */}
		</group>
	)
}

function Model({ url }) {
	const { scene } = useGLTF(url)
	return (
		<primitive object={scene} position={[-2.2, -0.4, 0]} rotation={[0, 2, 0]} />
	)
}

export default function AvatarCanvas() {
	return (
		<Suspense fallback={<MyLoader />}>
			<Avatar />
			<Environment preset='sunset' background={false} />
		</Suspense>
	)
}
