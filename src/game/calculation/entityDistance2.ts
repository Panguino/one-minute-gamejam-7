import { Maths, toVec3 } from '../../engine/math';
import { GameEntity } from '../GameEntity';


export const entityDistance2 = (a: GameEntity, b: GameEntity) => {
  const [ax, ay, az] = toVec3(a.mesh.position);
  const [bx, by, bz] = toVec3(b.mesh.position);

  return Maths.distance2([ax, az], [bx, bz]);
};


