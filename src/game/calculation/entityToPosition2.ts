import { toVec3 } from '../../engine/math'
import { tuple2 } from '../../engine/object'
import { GameEntity } from '../GameEntity'

export const entityToPosition2 = (entity: GameEntity) => {
    const [x, _, z] = toVec3(entity.mesh.position)
    return tuple2(x, z)
}
