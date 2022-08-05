import { isDefined } from '@mjtdev/object'
import { MeshBuilder, Scene } from 'babylonjs'
import { c4 } from '../c4'
import { getMesh } from './getMesh'
import { MeshOptions, updateMesh } from './updateMesh'

export type BoxOptions = Partial<{
    width: number
    height: number
    depth: number
    colors: string[]
}>

export const getBox = (scene: Scene, name: string, options: MeshOptions & BoxOptions = {}) => {
    return getMesh(scene, name, () => {
        const { width = 1, height = 1, depth = 1, colors } = options
        const mesh = MeshBuilder.CreateBox(
            name,
            {
                width,
                height,
                depth,
                faceColors: isDefined(colors) ? colors.map(c4) : undefined
            },
            scene
        )

        updateMesh(scene, mesh, options)
        return mesh
    })
}
