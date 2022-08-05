import { HtmlElementTexture, Scene } from 'babylonjs'
import { getTexture } from './getTexture'
import { samplingModeNumber } from './samplingModeNumber'
import { HtmlElementTextureOptions } from './Textures'
import { updateTexture } from './updateTexture'

export const getHtmlElementTexture = (scene: Scene, name: string, options: HtmlElementTextureOptions) => {
    const texture = getTexture(scene, name, () => {
        const { element, generateMipMaps = true, samplingMode = 'linearNearest' } = options
        return new HtmlElementTexture(name, element, {
            generateMipMaps,
            samplingMode: samplingModeNumber(samplingMode),
            engine: scene.getEngine(),
            scene
        })
    })
    updateTexture(texture, options)
    return texture
}


