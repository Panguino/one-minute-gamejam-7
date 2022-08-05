import { TickState } from './type/TickState'
import { TickLoopConfig } from './type/TickLoopConfig'
import { Tick } from './type/Tick'
import { Ticker } from './type/Ticker'

export const create = ({
    ticksPerSecond = 60,
    ticker: tickable = [],
    running = true,
    errorHandler = (error) => {
        throw error
    },
    request = requestAnimationFrame
}: TickLoopConfig): TickState => {
    // convert parameters
    const rateLimit = ticksPerSecond !== undefined
    ticksPerSecond = rateLimit ? ticksPerSecond : 60 // TODO SHOULD CALC
    const tickStepMs = (1 / ticksPerSecond) * 1000
    const tickers: Ticker[] = Array.isArray(tickable) ? tickable : [tickable]

    const state: TickState = {
        lastTickMs: Date.now(),
        nextTickMs: Date.now(),
        tickCount: 0,
        frameCount: 0,
        costMs: 0,
        rateLimit,
        tickStepMs,
        tickers,
        running,
        abort: false,
        deltaMs: 0,
        lastDeltaMs: 0
    }

    // animation loop
    const animate = async () => {
        const curTimeMs = Date.now()
        if (!rateLimit || curTimeMs >= state.nextTickMs) {
            state.lastDeltaMs = state.deltaMs
            state.deltaMs = curTimeMs - state.lastTickMs
            state.lastTickMs = curTimeMs
            state.nextTickMs = curTimeMs + tickStepMs
            const tick: Tick = {
                ...state
            }

            try {
                if (state.running) {
                    for (let i = 0; i < tickers.length; i++) {
                        const tickable = tickers[i]
                        await tickable(tick)
                    }
                    state.tickCount++
                }
            } catch (error) {
                errorHandler(error)
            }
            state.costMs = Date.now() - curTimeMs
        }
        state.frameCount++
        if (state.abort) {
            console.log('terminating animation loop')
            return
        }
        request(animate)
    }

    animate()

    return state
}
