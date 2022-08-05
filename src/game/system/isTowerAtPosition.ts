import { Maths, Vec2, Vec3, xOf, zOf } from '../../engine/math'
import { isDefined } from '../../engine/object'
import { GameWorld } from '../GameWorld'

export const isTowerAtPosition = ({ world, position }: { world: GameWorld; position: Vec2 }) => {
    const { entities } = world
    return isDefined(
        entities.filter((e) => e.type === 'tower').find((e) => Maths.distance2([xOf(e.mesh.position), zOf(e.mesh.position)], position) === 0)
    )
}
