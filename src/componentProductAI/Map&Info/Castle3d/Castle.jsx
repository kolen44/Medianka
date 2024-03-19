'use client'
import {
	Environment,
	Gltf,
	Html,
	OrbitControls,
	Stats,
	Text,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import Link from 'next/link'
import * as THREE from 'three'
import style from './Castle.module.css'

export default function Castle() {
	return (
		<Canvas
			style={{ borderRadius: '60px', marginLeft: '20px' }}
			shadows
			camera={{ position: [1, 0, 0], fov: 45 }}
		>
			<group>
				<Environment
					path='/hdri/'
					files={'venice_sunset_1k.hdr'}
					blur={1}
					background
				/>
				<mesh>
					<ambientLight intensity={0.5} />
					<Gltf src='/productAI/castle.glb' scale={10} />
					<Text
						color='black' // default
						anchorX='center' // default
						anchorY='middle' // default
					>
						И не только!
					</Text>
					<Html
						prepend // Project content behind the canvas (default: false)
						center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
						fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
						distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
						zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])(default=undefined)
						transform // If true, applies matrix3d transformations (default=false)
						sprite // Renders as sprite, but only in transform mode (default=false)alid
						scale={0.5}
					>
						<div className={style.main}>
							<div>
								<h3 className={style.h3}>Сферы применения :</h3>
								<div className={style.menu}>
									<div className='pr-10 text-xl'>
										<p>Парки</p>
										<p>Достопримечательности</p>
										<p>Гостиницы</p>
										<p>Аптеки</p>
									</div>
									<div className='pl-10 text-xl'>
										<p>Интерактивные площадки</p>
										<p>Торговые центры</p>
										<p>Банкоматы</p>
										<p>Транспорт</p>
									</div>
								</div>
							</div>
							<Link className={style.button} href='/'>
								Начать путешествие!
							</Link>
						</div>
					</Html>
				</mesh>
				<OrbitControls />
				<CameraRig />
				<Stats />
			</group>
		</Canvas>
	)
}

function CameraRig({ v = new THREE.Vector3() }) {
	return useFrame(state => {
		const t = state.clock.elapsedTime
		state.camera.position.lerp(
			v.set(Math.sin(t * 2.6), 0, 8.6 + Math.cos(t / 5) / 2),
			0.05
		)
	})
}
