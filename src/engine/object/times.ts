import { isDefined } from './isDefined'

export function times<T>(count: number, mapper: (index: number, stop: () => void) => T): T[] {
    const result: T[] = []
    let stopped = false
    for (let i = 0; i < count; i++) {
        if (stopped) {
            break
        }
        const r = mapper(i, () => {
            stopped = true
        })
        if (isDefined(r)) {
            result.push(r)
        }
    }
    return result
}
