import { GameWorld } from './GameWorld';
import { setupCameraTopDown } from './camera/setupCameraTopDown';
import { setupCameraDebug } from "./camera/setupCameraDebug";


export const toggleDebug = (world: GameWorld) => {
    world.debug = !world.debug;

    if (world.debug) {
        setupCameraDebug(world);
    } else {
        setupCameraTopDown(world);
    }
};
