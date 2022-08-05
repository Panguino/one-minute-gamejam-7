import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GameMenuWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.25);
    z-index: 60;
`
export const GameMenu = styled(motion.div)`
    background-image: url('img/menu_background@2x.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    height: 300px;
    //padding: 20px;
    color: #fff;
    position: relative;
    h1 {
        padding: 0;
        margin: -2px 0 15px;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 22px;
        letter-spacing: 0px;
        text-align: center;
        text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    }
`
export const Close = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 35px;
    height: 35px;
    background-image: url('img/close@2x.png');
    background-size: cover;
    z-index: 30;
    cursor: pointer;
`

export const EndScreen = styled.div`
    padding: 20px;
    h1 {
        color: #fff;
        padding: 0;
        margin: -2px 0 15px;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 22px;
        letter-spacing: 0px;
        text-align: center;
        text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    }
`
export const EndScore = styled.div`
    color: #fff;
    padding: 0;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 42px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
`
export const HighScores = styled.div`
    color: #fff;
`
export const Score = styled.div`
    color: #fff;
    padding: 0;
    margin: -2px 0 15px;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 22px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
`
