import { getBox } from './getBox'
import { pickMesh } from './pickMesh'

// BS babylonjs 'magic'
// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";
// import 'babylonjs-inspector'
// import "babylonjs/Debug/debugLayer";

import { destroyMesh } from './destroyMesh'
import { findClosestPick } from './findClosestPick'
import { getMesh } from './getMesh'
import { getPlane } from './getPlane'
import { lookAt } from './lookAt'
import { pickMeshes } from './pickMeshes'
import { getSphere } from './getSphere'
export const Meshes = {
    lookAt,
    getBox,
    getPlane,
    pickMesh,
    getMesh,
    getSphere,
    findClosestPick,
    destroyMesh,
    pickMeshes
}
