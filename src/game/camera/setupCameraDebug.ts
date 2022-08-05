import { ArcRotateCamera, Camera } from 'babylonjs'
import { v3 } from '../../engine/babs/v3'
import { GameWorld } from '../GameWorld'

export const setupCameraDebug = (world: GameWorld) => {
    const { scene } = world
    scene?.activeCamera?.dispose()
    const canvas = scene.getEngine().getRenderingCanvas()
    const alpha = -Math.PI / 2
    const beta = Math.PI / 2.5
    const camera = new ArcRotateCamera('camera', alpha, beta, 15, v3(0, 0, 0), scene)
    camera.attachControl(canvas, true)
    camera.mode = Camera.PERSPECTIVE_CAMERA
}
