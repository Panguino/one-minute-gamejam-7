import styled, { css } from 'styled-components'

export const TowerNavItem = styled.div`
    width: 70px;
    height: 70px;
    background-image: url('img/TowerButton@2x.png');
    background-size: contain;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    position: relative;
    ${({ icon }) =>
        css`
            &:before {
                position: absolute;
                background-size: 50px 50px;
                background-position: 50% 30%;
                background-image: url('${icon}');
                background-repeat: no-repeat;
                content: '';
                top: 0;
                width: 100%;
                height: 100%;
                left: 0;
            }
        `}
    ${({ active }) =>
        !active &&
        css`
            pointer-events: none;
            opacity: 0.3;
        `}
`

export const Cost = styled.div`
    position: absolute;
    bottom: 0px;
    left: 10px;
    color: #fff;
    padding: 0 0 0 20px;
    z-index: 50;
    background-image: url('img/Money@2x.png');
    background-size: contain;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
`
