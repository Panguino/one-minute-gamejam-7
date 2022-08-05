import { Scene } from 'babylonjs'
import { Engine } from 'matter-js'
import { SoundCtx } from '../engine/sound/type/SoundCtx'
import { TickState } from '../engine/tick'
import { GameEntity } from './GameEntity'

export type GameWorld = {
    scene: Scene
    physicsEngine: Engine
    soundCtx: SoundCtx
    seed: number
    debug: boolean
    unitsWide: number
    unitsTall: number
    physicsScale: number

    entities: GameEntity[]
    controlLoop: TickState
    renderLoop: TickState
    gameLoop: TickState
}
