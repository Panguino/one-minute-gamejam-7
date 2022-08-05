import { Materials, Meshes, Textures } from '../../engine/babs'
import { v3 } from '../../engine/babs/v3'
import { toVec2, toVec3, Vec2 } from '../../engine/math'
import { first, isUndefined } from '../../engine/object'
import { Physics } from '../../engine/physics-2d'
import { Randoms } from '../../engine/random'
import { Sounds } from '../../engine/sound'
import useGeneralState from '../../state/generalState'
import { GameWorld } from '../GameWorld'
import { SFX_SOURCES } from '../SFX_SOURCES'
import { isTowerAtPosition } from '../system/isTowerAtPosition'
import { sortEntitiesByDistanceFromTarget } from '../system/sortEntitiesByDistanceFromTarget'
import { TOWERS } from './TOWERS'

export const placeTowerAtMousePosition = ({ world, position, towerName }: { world: GameWorld; position: Vec2; towerName: string }) => {
    const { entities, physicsScale, scene, physicsEngine, soundCtx } = world

    const { money, removeMoney } = useGeneralState.getState()

    const [x, y] = position
    const tower = TOWERS[towerName]
    if (isUndefined(tower)) {
        return
    }

    const pick = first(Meshes.pickMeshes(scene, x, y))
    if (isUndefined(pick)) {
        return
    }

    const [px, py, pz] = toVec3(pick.pickedPoint)

    const { textureSrc, cost, colliderSize, visualSize } = tower

    if (cost > money) {
        return
    }

    const id = `tower-${x},${y}`

    // find closest peg to click
    const sortedEntities = entities.filter((e) => e.type === 'peg').sort((a, b) => sortEntitiesByDistanceFromTarget(a, b, [px, pz]))
    const closestPeg = first(sortedEntities)
    const pegPosition = closestPeg.mesh.position

    const [pegX, pegY, pegZ] = toVec3(pegPosition)
    if (isTowerAtPosition({ world, position: [pegX, pegZ] })) {
        return
    }

    const tex = Textures.getPathTexture(scene, `${towerName}-texture`, { src: textureSrc })
    const mat = Materials.getMaterial(scene, `${towerName}-material`, {
        emissiveTexture: tex.name,
        opacityTexture: tex.name
    })
    const mesh = Meshes.getBox(scene, id, {
        // position: pegPosition,
        position: [0, 20, 0],
        // color: 'blue',
        width: visualSize,
        height: visualSize,
        depth: visualSize,
        material: mat.name
    })
    mesh.rotation = v3(0, Math.PI / 2, 0)

    const physicsBody = Physics.getBodyType(physicsEngine.world, 'circle', id, {
        x: pegX * physicsScale,
        y: -pegZ * physicsScale,
        radius: (colliderSize / 2) * physicsScale,
        isStatic: true,
        mass: 10,
        frictionAir: 0.05
    })

    world.entities.push({
        id,
        mesh,
        type: 'tower',
        physicsBody,
        ...tower
    })

    removeMoney(cost)
    const sfx = Randoms.pickRandom(SFX_SOURCES.filter((sfx) => /tower_placement/.test(sfx)))
    Sounds.playNote({ ctx: soundCtx, instrument: 'sampler', voice: sfx })
}
