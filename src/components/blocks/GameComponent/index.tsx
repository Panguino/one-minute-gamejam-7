import { useEffect, useRef, useState } from 'react'

import * as S from './styles'
import { initGame } from '../../../game/initGame'
import ScoreDisplay from '@/components/elements/ScoreDisplay'
import GameMenu from '@/components/elements/GameMenu'
import useGeneralState from '@/state/generalState'
import { GameWorld } from '../../../game/GameWorld'
import { placeTowerAtMousePosition } from '../../../game/tower/placeTowerAtMousePosition'
import { TOWERS } from '../../../game/tower/TOWERS'
import TowerNavItem from './TowerNavItem'
import TimerDisplay from '@/components/elements/TimerDisplay'
import MoneyDisplay from '@/components/elements/MoneyDisplay'

const GameComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement>()
    const { 
        gamePhase,
        placementPhase, menuOpen, setMenuOpen } = useGeneralState((state) => state)

    const inGame = placementPhase || gamePhase

    // TODO use zustand?
    const [world, setWorld] = useState<GameWorld>()

    const setup = async () => {
        const [destructor, world] = await initGame(canvasRef.current)
        setWorld(world)
        return destructor
    }

    useEffect(() => {
        const destructorPromise = setup()
        // not 100% on if this is a kosher practice but it should work for now.
        return () => {
            destructorPromise.then((destructor) => destructor())
        }
    }, [])

    return (
        <S.Game>
            <S.GameCanvas>
                <canvas
                    onDrop={(event) => {
                        event.preventDefault()
                        const towerName = event.dataTransfer.getData('text')
                        const { clientX, clientY } = event
                        // get offset
                        const { left, top } = canvasRef.current.getBoundingClientRect()
                        const x = clientX - left
                        const y = clientY - top
                        placeTowerAtMousePosition({ world, position: [x, y], towerName })
                    }}
                    onDragOver={(event) => {
                        event.preventDefault()
                    }}
                    ref={canvasRef}
                />
                {!menuOpen && <S.Hamburger onClick={() => setMenuOpen(!menuOpen)} />}
                {menuOpen && <GameMenu />}
                {inGame && <><ScoreDisplay />
                <MoneyDisplay />
                <TimerDisplay />
                {placementPhase && <S.Label>Drag the towers<br />to place them</S.Label>}
                <S.TowerNav>
                    {Object.entries(TOWERS).map((entry, index) => {
                        const [towerName, tower] = entry
                        const { textureSrc, cost } = tower

                        return (
                            <TowerNavItem
                                key={index}
                                draggable="true"
                                onDragStart={(event) => {
                                    event.dataTransfer.setData('text', towerName)
                                }}
                                cost={cost}
                                icon={textureSrc}
                            />
                        )
                    })}
                </S.TowerNav></>}
            </S.GameCanvas>
        </S.Game>
    )
}

export default GameComponent
