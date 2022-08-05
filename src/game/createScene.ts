import { ArcRotateCamera, HemisphericLight, Scene, UniversalCamera } from 'babylonjs'

import { Babs } from '@/engine/babs'
import { Meshes } from '../engine/babs/mesh/Meshes'
import { v3 } from '../engine/babs/v3'
import { setupCameraTopDown } from './camera/setupCameraTopDown'

export const createScene = (canvas: HTMLCanvasElement) => {
    const renderEngine = Babs.createEngine({ canvas })
    const scene = new Scene(renderEngine)

    // const camera = new UniversalCamera('camera', v3(0, 100, 0))
    // camera.target = v3(0, 0, 0)
    // camera.rotation = v3(Math.PI / 2, 0, 0)

    // TODO emissive textures for now, maybe play with diffuse textures and lights later

    const plane = Meshes.getPlane(scene, 'ground', { width: 30, height: 30 })
    plane.rotation.x = Math.PI * 0.5
    plane.position.y = -1

    return scene
}
