import { addBody } from './addBody'
import { allBodies } from './allBodies'
import { applyForce } from './applyForce'
import { createEngine } from './createEngine'
import { getBody } from './getBody'
import { getBodyType } from './getBodyType'
import { removeBody } from './removeBody'
import { update } from './update'
import { updateBody } from './updateBody'

export const Physics = {
    getBody,
    addBody,
    removeBody,
    getBodyType,
    updateBody,
    update,
    applyForce,
    createEngine,
    allBodies
}
