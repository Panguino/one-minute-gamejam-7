import { Ticker } from '../../engine/tick';
import { GameWorld } from '../GameWorld';
import { AddDestructor, keyboardHandlerSystem } from './keyboardHandlerSystem';


export const addControlSystems = (world: GameWorld, addDestructor: AddDestructor): Ticker[] => {
    return [keyboardHandlerSystem({ world, addDestructor })];
};
