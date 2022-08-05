import { TypeGuard } from './type/TypeGuard'
import { isUndefined } from './isUndefined'
import { isIterator } from './type/isIterator'

export const first = <O, T extends O>(obj: O[] | O | Iterator<O, T>, typeGuard: TypeGuard<T> = (v): v is T => true): T => {
    if (isUndefined(obj)) {
        return undefined
    }
    if (Array.isArray(obj)) {
        return obj.find(typeGuard)
    }
    if (isIterator(obj) && typeGuard(obj)) {
        return obj.next().value as T
    }

    return obj as T
}
