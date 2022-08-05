import { getTexture } from './getTexture'
import { getHtmlElementTexture } from './getHtmlElementTexture'
import { copyToCanvas } from './copyToCanvas'
import { imageToTexture } from './imageToTexture'
import { TEXTURE_SAMPLING_MODES } from './TEXTURE_SAMPLING_MODES'
import { updateTexture } from './updateTexture'
import { getDynamicTexture } from './getDynamicTexture'
import { drawOnTexture } from './drawOnTexture'
import { clearTexture } from './clearTexture'
import { destroyTexture } from './destroyTexture'
import { getPathTexture } from './getPathTexture'

export type TextureSamplingModeMap = typeof TEXTURE_SAMPLING_MODES

export type TextureOptions = Partial<{
    hasAlpha: boolean
    generateMipMaps: boolean
    samplingMode: keyof TextureSamplingModeMap
}>

export type HtmlElementTextureOptions = Partial<
    TextureOptions & {
        element: HTMLCanvasElement | HTMLVideoElement
    }
>

export type PathTextureOptions = Partial<
    TextureOptions & {
        src: string
    }
>

export type DynamicTextureOptions = Partial<
    TextureOptions & {
        width: number
        height: number
    }
>

export type AllTextureOptions = HtmlElementTextureOptions & DynamicTextureOptions

export const Textures = {
    copyToCanvas,
    getTexture,
    getHtmlElementTexture,
    getDynamicTexture,
    getPathTexture,
    updateTexture,

    imageToTexture,

    drawOnTexture,
    clearTexture,
    destroyTexture
}
