import { useState } from 'react'

import * as S from './styles'
import useGeneralState from '@/state/generalState'
import MenuButton from '../MenuButton'
import VolumeScrubber from '../VolumeScrubber'
import { Sounds } from '@/engine/sound'

const GameMenu = () => {
    const {
        setMenuOpen,
        sfxVolume,
        musicVolume,
        setSFXVolume,
        setMusicVolume,
        startGame,
        endPhase,
        highScores,
        lastHighScore,
        closeEndScreen,
        gamePhase,
        placementPhase
    } = useGeneralState((state) => state)
    const [optionsOpen, setOptionsOpen] = useState(false)
    const [highScoresOpen, setHighScoresOpen] = useState(false)

    const inGame = placementPhase || gamePhase

    return (
        <S.GameMenuWrapper>
            {!endPhase ? (
                <>
                    {!highScoresOpen ? (
                        <>
                            <S.GameMenu
                                initial={{ scale: 0.6, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: 'spring', damping: 20, stiffness: 400, duration: 1, delay: 0.2 }}
                            >
                                {inGame && (
                                    <S.Close
                                        onClick={() => {
                                            setMenuOpen(false)
                                        }}
                                    />
                                )}
                                {!optionsOpen ? (
                                    <>
                                        <h1>Menu</h1>
                                        {inGame ? (
                                            <MenuButton
                                                onClick={() => {
                                                    setMenuOpen(false)
                                                }}
                                            >
                                                Resume
                                            </MenuButton>
                                        ) : (
                                            <MenuButton
                                                onClick={async () => {
                                                    await Sounds.ready()
                                                    startGame()
                                                }}
                                            >
                                                Start Game
                                            </MenuButton>
                                        )}
                                        <MenuButton
                                            onClick={() => {
                                                setHighScoresOpen(true)
                                            }}
                                        >
                                            High Scores
                                        </MenuButton>
                                        <MenuButton
                                            onClick={() => {
                                                setOptionsOpen(true)
                                            }}
                                        >
                                            Options
                                        </MenuButton>
                                    </>
                                ) : (
                                    <>
                                        <h1>Options</h1>
                                        <VolumeScrubber
                                            label="Music"
                                            volume={musicVolume}
                                            onChange={(volume) => {
                                                setMusicVolume(volume)
                                            }}
                                        />
                                        <VolumeScrubber
                                            label="SFX"
                                            volume={sfxVolume}
                                            onChange={(volume) => {
                                                setSFXVolume(volume)
                                            }}
                                        />
                                        <MenuButton onClick={() => setOptionsOpen(false)}>Back</MenuButton>
                                    </>
                                )}
                            </S.GameMenu>
                        </>
                    ) : (
                        <S.EndScreen>
                            <MenuButton
                                onClick={() => {
                                    setHighScoresOpen(false)
                                }}
                            >
                                Main Menu
                            </MenuButton>
                            <S.HighScores>
                                <h1>High Scores</h1>
                                {highScores.length === 0 && <p>No high Scores yet</p>}
                                {highScores
                                    .sort((a, b) => {
                                        return b - a
                                    })
                                    .map((highScore, index) => {
                                        if (index > 4) {
                                            return
                                        }
                                        return (
                                            <S.Score key={index}>
                                                {index + 1}: {highScore}
                                            </S.Score>
                                        )
                                    })}
                            </S.HighScores>
                        </S.EndScreen>
                    )}
                </>
            ) : (
                <S.EndScreen>
                    <h1>Game Over</h1>
                    <S.EndScore>Score: {lastHighScore}</S.EndScore>
                    <MenuButton onClick={startGame}>Play Again</MenuButton>
                    <MenuButton onClick={closeEndScreen}>Main Menu</MenuButton>
                    <S.HighScores>
                        <h1>High Scores</h1>
                        {highScores
                            .sort((a, b) => {
                                return b - a
                            })
                            .map((highScore, index) => {
                                if (index > 4) {
                                    return
                                }
                                return (
                                    <S.Score key={index}>
                                        {index + 1}: {highScore}
                                    </S.Score>
                                )
                            })}
                    </S.HighScores>
                </S.EndScreen>
            )}
        </S.GameMenuWrapper>
    )
}

export default GameMenu
