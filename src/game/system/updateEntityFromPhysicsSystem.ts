import { v3 } from '../../engine/babs/v3'
import { toVec2, yOf } from '../../engine/math'
import { isDefined } from '../../engine/object'
import { Tick } from '../../engine/tick'
import { GameWorld } from '../GameWorld'

export const updateEntityFromPhysicsSystem = ({ world }: { world: GameWorld }) => {
    return (tick: Tick) => {
        const { entities, physicsScale } = world
        entities
            .filter((e) => isDefined(e.physicsBody) && isDefined(e.mesh))
            .forEach((entity) => {
                const { physicsBody, mesh } = entity
                const [x, y] = toVec2(physicsBody.position)

                mesh.position = v3(x / physicsScale, yOf(mesh.position), -y / physicsScale)
            })
    }
}
