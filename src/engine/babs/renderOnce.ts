import { Scene } from 'babylonjs'

export const renderOnce = (scene: Scene): Promise<void> => {
    return new Promise((resolve, reject) => {
        try {
            scene.onAfterRenderCameraObservable.addOnce(() => {
                resolve()
            })
            scene.render(true)
        } catch (reason) {
            reject(reason)
        }
    })
}
