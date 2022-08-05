export const consumeKey = (state: { keys: string[] }, key: string, action: () => void) => {
    const { keys } = state
    if (!keys.includes(key)) {
        return
    }

    action()
    state.keys = keys.filter((k) => k !== key)
}
