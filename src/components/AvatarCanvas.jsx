'use client'
import { Environment, useAnimations, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useLayoutEffect, useState } from 'react'
import { useStores } from '../data/store/useStore'
import { MyLoader } from './MyLoader'

const Avatar = () => {
	const avatar = useGLTF('/praying.glb')
	const timeToSpeak = useStores(state => state.timeToSpeak)
	const [index, setIndex] = useState(1)
	const { actions, names } = useAnimations(avatar.animations, avatar.scene)
	const [isClicked, setClicked] = useState(false)
	const setTimeToSpeak = useStores(state => state.setTimeToSpeak)

	useEffect(() => {
		const actionName = names[index]
		const action = actions[actionName]
		action?.reset().fadeIn(0.5).play()
		return () => {
			action?.fadeOut(0.5)
		}
	}, [index, actions, names, timeToSpeak])
	if(timeToSpeak == true){
		setIndex((index + 1) % names.length)
		setClicked(!isClicked)
		const actionName = names[index]
		const action = actions[actionName]
		action?.reset().fadeIn(0.5).play()
		return () => {
			action?.fadeOut(0.5)
			setTimeout(()=>{
				setTimeToSpeak(false)
				setIndex((index + 2) % names.length)
			},7000)
		}
		
	}

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
