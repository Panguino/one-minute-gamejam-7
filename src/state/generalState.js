import create from 'zustand'

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

const useGeneralState = create((set) => ({
    score: 0,
    highScores: [],
    money: 0,
    sfxVolume: 80,
    musicVolume: 80,
    menuOpen: true,
    placementTime: 5,
    gameTime: 60,
    placementPhase: false,
    gamePhase: false,
    endPhase: false,
    lastHighScore: 0,
    maxBubbles: 10,
    bubbleRewardMoney: 1,
    bubbleRewardScore: 10,
    maxMiniBubbles: 5,
    miniBubbleWiggle: 0.1,
    floatStrength: 0.0002,
    bubbleDustSize: 0.3,
    bubbleWiggleForce: 0.02,
    bubbleWiggleChance: 0.5,
    addHighScore: (score) => {
        return set((state) => ({ ...state, highScores: [...state.highScores, score], lastHighScore: score }))
    },
    setMenuOpen: (menuOpen) => set((state) => ({ ...state, menuOpen })),
    startGame: () => set((state) => ({ ...state, score: 0, money: 100, placementPhase: true, menuOpen: false, endPhase: false })),
    finishedPlacement: () => set((state) => ({ ...state, placementPhase: false, gamePhase: true })),
    finishedGame: () => set((state) => ({ ...state, gamePhase: false, endPhase: true, menuOpen: true })),
    setScore: (score) => set((state) => ({ ...state, score })),
    setMoney: (money) => set((state) => ({ ...state, money })),
    setSFXVolume: (sfxVolume) => set((state) => ({ ...state, sfxVolume: clamp(sfxVolume, 0, 100) })),
    setMusicVolume: (musicVolume) => set((state) => ({ ...state, musicVolume: clamp(musicVolume, 0, 100) })),
    addScore: (value) => set((state) => ({ ...state, score: state.score + value })),
    addMoney: (value) => set((state) => ({ ...state, money: state.money + value })),
    removeMoney: (value) => set((state) => ({ ...state, money: state.money - value })),
    closeEndScreen: () => set((state) => ({ ...state, endPhase: false }))
}))

export default useGeneralState
