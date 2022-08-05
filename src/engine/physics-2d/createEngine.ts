import { Engine } from 'matter-js'

import { EngineOptions } from './type/EngineOptions'

export const createEngine = (options: EngineOptions = {}): Engine => {
    const { gravity = {}, enableSleeping = false } = options
    const { scale = 1, x = 0, y = 0 } = gravity
    const engine = Engine.create()
    engine.gravity.scale = scale
    engine.gravity.x = x
    engine.gravity.y = y
    engine.enableSleeping = enableSleeping
    return engine
}
