import { AbstractMesh } from 'babylonjs'
import { Vec3 } from '../engine/math'

import { Body } from 'matter-js'
import { Tower } from './tower/Tower'
import { Tick } from '../engine/tick'

export type EntityType = 'bubble' | 'tower' | 'peg' | 'projectile' | 'environment' | 'aoe'

export type GameEntity = Partial<Tower> & {
    id: string
    mesh: AbstractMesh
    physicsBody?: Body
    type: EntityType

    // movement outside of physics
    destination?: Vec3
    destinationRadius?: number
    onDestinationReached?: () => void // KISS
    speed?: number

    // fire control
    cooldownTicks?: number
    fireRateTicks?: number

    // collisions outside of physics
    collisionRadius?: number

    bubbleSize?: number
    invulnerable?: boolean

    range?: number // how far the tower can shoot

    animation?: (tick: Tick) => void
}
