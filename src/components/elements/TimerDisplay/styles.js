import styled from 'styled-components'

export const TimerDisplay = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 0 0 0 60px;
    z-index: 50;
    background-image: url('img/clock@2x.png');
    background-size: contain;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 40px;
    line-height: 38px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
`

export const PlacementDisplay = styled.div`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    p {
        margin: 0;
        padding: 0;
        color: #fff;
        font-weight: 900;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: center;
        text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    }
`
