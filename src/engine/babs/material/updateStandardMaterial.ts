import { Scene, StandardMaterial } from 'babylonjs'
import { iff } from '@mjtdev/object'
import { getTexture } from '../texture/getTexture'
import { c3 } from '../c3'
import { Colors } from '@mjtdev/color'
import { AllMaterialOptions } from './Materials'

export const updateStandardMaterial = (scene: Scene, material: StandardMaterial, options: AllMaterialOptions) => {
    const { alpha, diffuseTexture, emissiveTexture, ambientTexture, opacityTexture, diffuseColor, specularColor, ambientColor, emissiveColor } =
        options

    iff(diffuseTexture, (value) => {
        const texture = getTexture(scene, value, () => undefined)
        material.diffuseTexture = texture
    })
    iff(emissiveTexture, (value) => {
        const texture = getTexture(scene, value, () => undefined)
        material.emissiveTexture = texture
    })
    iff(ambientTexture, (value) => {
        const texture = getTexture(scene, value, () => undefined)
        material.ambientTexture = texture
    })
    iff(opacityTexture, (value) => {
        const texture = getTexture(scene, value, () => undefined)
        material.opacityTexture = texture
    })
    iff(diffuseColor, (value) => {
        material.diffuseColor = c3(value)
        const colorAlpha = Colors.from(value).alpha()
        if (colorAlpha < 1) {
            material.alpha = colorAlpha
        }
    })
    iff(specularColor, (value) => {
        material.specularColor = c3(value)
    })
    iff(ambientColor, (value) => {
        material.ambientColor = c3(value)
    })
    iff(emissiveColor, (value) => {
        material.specularColor = c3(value)
    })

    iff(alpha, (value) => {
        material.alpha = value
    })
}
