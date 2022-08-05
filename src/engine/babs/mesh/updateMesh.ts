import { Colors } from '@mjtdev/color'
import { Point2, Point3 } from '@mjtdev/math'
import { iff, isDefined } from '@mjtdev/object'
import { InstancedMesh, Mesh, Scene, StandardMaterial } from 'babylonjs'
import { c3 } from '../c3'
import { getMaterial } from '../material/getMaterial'
import { v3 } from '../v3'

export type MeshOptions = Partial<{
    position: Point3 | Point2
    color: string
    material: string
    receiveShadows: boolean
}>

export const updateMesh = (scene: Scene, mesh: Mesh | InstancedMesh, options: MeshOptions) => {
    const { position, color, material, receiveShadows } = options

    if (mesh instanceof Mesh && isDefined(material)) {
        mesh.material = getMaterial(scene, material, 'standard')
    }

    if (mesh instanceof Mesh && isDefined(receiveShadows)) {
        mesh.receiveShadows = receiveShadows
    }

    iff(position, (p) => {
        mesh.position = v3(p)
    })

    iff(color, (c) => {
        const material = mesh.material
        if (material instanceof StandardMaterial) {
            material.diffuseColor = c3(c)
            const alpha = Colors.from(c).alpha()
            if (alpha < 1) {
                material.alpha = alpha
            }
            material.specularColor = c3('black')
            material.ambientColor = c3(c)
            material.emissiveColor = c3(c)
        }
    })
}
