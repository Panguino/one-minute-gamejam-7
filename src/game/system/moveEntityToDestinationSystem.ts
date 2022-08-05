import { v3 } from '../../engine/babs/v3'
import { Maths } from '../../engine/math'
import { isDefined, isUndefined } from '../../engine/object'
import { Tick } from '../../engine/tick'
import { GameWorld } from '../GameWorld'
import { AddDestructor } from './keyboardHandlerSystem'

export const moveEntityToDestinationSystem = ({ world, addDestructor }: { world: GameWorld; addDestructor: AddDestructor }) => {
    return (tick: Tick) => {
        const { scene, entities } = world
        const { deltaMs } = tick

        entities
            .filter((e) => isDefined(e.destination) && isDefined(e.mesh))
            .forEach((entity) => {
                const { mesh, destination, destinationRadius = 0, speed = 1, onDestinationReached = () => {} } = entity
                mesh.position = v3(Maths.lerp3(mesh.position, destination, deltaMs * speed * 0.0003))
                if (Maths.distance2(mesh.position, destination) <= destinationRadius) {
                    onDestinationReached()
                }
            })
    }
}
