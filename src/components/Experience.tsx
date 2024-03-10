import { Environment, Gltf, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { ReactNode } from 'react'
import AvatarCanvas from './AvatarCanvas'
import { Effects } from './Effects'

export default function Experience() {
	return (
		<>
			<Canvas
				gl={{ antialias: false, stencil: false }}
				camera={{ position: [5, 0, 0], fov: 80 }}
			>
				{window.innerWidth > 768 && <OrbitControls />}
				<spotLight
					angle={0.12}
					penumbra={0.1}
					position={[10, 0, -10]}
					intensity={40}
					onUpdate={self => {
						self.target.position.set(-10, 0, 0)
						self.target.updateMatrixWorld()
					}}
				/>
				<Environment preset='sunset' />
				<Effects />
				<ambientLight intensity={0.5} color='white' />
				<Gltf src='/hall-transformed.glb' position={[0, 0.98, 0]} />
				<AvatarCanvas />
				<Rig from={-Math.PI / 2} to={Math.PI / 2.66} />
			</Canvas>
		</>
	)
}

function Rig(): ReactNode {
	return useFrame(state => {
		state.camera.position.lerp(
			{ x: 0, y: -state.pointer.y / 4, z: state.pointer.x / 2 },
			0.1
		)
		state.camera.lookAt(-1, 0, 0)
	})
}
