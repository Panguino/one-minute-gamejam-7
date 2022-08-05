import { Vec2 } from '../../engine/math'
import { isUndefined, times } from '../../engine/object'
import { Tick } from '../../engine/tick'
import { GameWorld } from '../GameWorld'
import { AddDestructor } from './keyboardHandlerSystem'
import { placeTowerAtMousePosition } from '../tower/placeTowerAtMousePosition'

export const placeTowerAtPointerClickSystem = ({
    world,
    parent = document.body,
    addDestructor
}: {
    world: GameWorld
    parent?: HTMLElement
    addDestructor: AddDestructor
}) => {
    const CLICK_STATE = { position: undefined as Vec2 }

    const pointerDownHandler = (event: PointerEvent) => {
        const { offsetX, offsetY } = event
        CLICK_STATE.position = [offsetX, offsetY]
    }
    parent.addEventListener('pointerdown', pointerDownHandler)
    addDestructor(() => parent.removeEventListener('pointerdown', pointerDownHandler))

    return (tick: Tick) => {
        const { position } = CLICK_STATE
        if (isUndefined(position)) {
            return
        }
        delete CLICK_STATE.position //consume the click
        placeTowerAtMousePosition({ world, position, towerName: 'clam' })
    }
}
