import { Maths, Point2, Point3, toVec2, toVec3 } from '../../engine/math'
import { toVec } from '../../engine/math/toVec'
import { GameEntity } from '../GameEntity'

export const sortEntitiesByDistanceFromTarget = (a: GameEntity, b: GameEntity, target: Point2 | Point3) => {
    const vec = toVec(target)

    // Z is the Y for babylon
    const [px, pz] = vec.length === 2 ? [vec[0], vec[1]] : [vec[0], vec[2]]
    const [ax, ay, az] = toVec3(a.mesh.position)
    const [bx, by, bz] = toVec3(b.mesh.position)
    const da = Maths.distance2([ax, az], [px, pz])
    const db = Maths.distance2([bx, bz], [px, pz])

    return da - db
}
