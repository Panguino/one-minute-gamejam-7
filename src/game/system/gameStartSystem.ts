import { Tick } from '../../engine/tick';
import useGeneralState from '../../state/generalState';
import { GameWorld } from '../GameWorld';
import { GameWorlds } from '../GameWorlds';


export const gameStartSystem = ({ world }: { world: GameWorld; }) => {
  return (tick: Tick) => {
    const { placementPhase } = useGeneralState.getState();
    const { entities } = world;
    if (placementPhase) {
      // remove all bubbles from last game
      entities
        .filter((e) => e.type === 'bubble')
        .forEach((entity) => {
          GameWorlds.removeEntity(world, entity.id);
        });
    }
  };
};
