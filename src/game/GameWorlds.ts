import { Meshes } from '../engine/babs'
import { iff, isUndefined } from '../engine/object'
import { Physics } from '../engine/physics-2d'
import { GameEntity } from './GameEntity'
import { GameWorld } from './GameWorld'

export const addEntity = (world: GameWorld, entity: GameEntity) => {
    world.entities.push(entity)
    return world
}

export const removeEntity = (world: GameWorld, id: string) => {
    const { entities, scene, physicsEngine } = world
    const entity = world.entities.find((e) => id === e.id)
    if (isUndefined(entity)) {
        return
    }
    world.entities = entities.filter((e) => e.id !== id)

    const { mesh, physicsBody } = entity
    iff(mesh, () => {
        Meshes.destroyMesh(scene, id)
    })

    iff(physicsBody, () => {
        Physics.removeBody(physicsEngine.world, id)
    })

    return world
}

export const GameWorlds = {
    addEntity,
    removeEntity
}
