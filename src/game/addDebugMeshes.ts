import { Materials } from '../engine/babs/material/Materials'
import { Meshes } from '../engine/babs/mesh/Meshes'
import { GameWorld } from './GameWorld'

export const addDebugMeshes = (world: GameWorld) => {
    const { scene, unitsTall, unitsWide } = world
    Meshes.getBox(scene, 'debug-mid-box', {
        material: Materials.getMaterial(scene, 'mid-mat').name,
        color: 'grey',
        position: [0, 0, 0]
    })
    Meshes.getBox(scene, 'debug-top-box', {
        material: Materials.getMaterial(scene, 'top-mat').name,
        color: 'blue',
        position: [0, 0, -unitsTall / 2]
    })
    Meshes.getBox(scene, 'debug-bot-box', {
        material: Materials.getMaterial(scene, 'bot-mat').name,
        color: 'green',
        position: [0, 0, unitsTall / 2]
    })
    Meshes.getBox(scene, 'debug-left-box', {
        material: Materials.getMaterial(scene, 'left-mat').name,
        color: 'yellow',
        position: [-unitsWide / 2, 0, 0]
    })
    Meshes.getBox(scene, 'debug-right-box', {
        material: Materials.getMaterial(scene, 'right-mat').name,
        color: 'red',
        position: [unitsWide / 2, 0, 0]
    })
}
