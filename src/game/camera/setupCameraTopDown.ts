import { ArcRotateCamera, Camera, UniversalCamera } from 'babylonjs'
import { v3 } from '../../engine/babs/v3'
import { GameWorld } from '../GameWorld'

export const setupCameraTopDown = (world: GameWorld) => {
    const { scene, unitsTall, unitsWide } = world

    scene?.activeCamera?.dispose()

    const camera = new UniversalCamera('camera', v3(0, 100, 0))
    camera.target = v3(0, 0, 0)
    camera.rotation = v3(Math.PI / 2, 0, 0)
    camera.orthoTop = -unitsTall / 2
    camera.orthoBottom = unitsTall / 2
    camera.orthoLeft = -unitsWide / 2
    camera.orthoRight = unitsWide / 2
    camera.detachControl()
    camera.mode = Camera.ORTHOGRAPHIC_CAMERA
}
