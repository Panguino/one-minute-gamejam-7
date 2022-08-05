import styled, { css } from 'styled-components'

export const VolumeScrubber = styled.div`
    position: relative;
    padding-bottom: 12px;
`
export const Label = styled.div`
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    padding-bottom: 3px;
    letter-spacing: 0px;
    text-align: center;
    text-shadow: -2px -2px 0 var(--color-secondary1), 2px -2px 0 var(--color-secondary1), -2px 2px 0 var(--color-secondary1),
        2px 2px 0 var(--color-secondary1);
`
export const Plus = styled.div`
    position: absolute;
    right: 20px;
    bottom: 9px;
    width: 30px;
    height: 30px;
    background-image: url('img/plus@2x.png');
    background-size: contain;
    cursor: pointer;
    z-index: 20;
`
export const Minus = styled.div`
    position: absolute;
    left: 20px;
    bottom: 9px;
    width: 30px;
    height: 30px;
    background-image: url('img/minus@2x.png');
    background-size: contain;
    cursor: pointer;
    z-index: 20;
`
export const Scrubber = styled.div`
    height: 24px;
    width: 60%;
    background: var(--color-secondary1);
    margin: 0 auto;
    padding: 2px;
    overflow: hidden;
    position: relative;
    z-index: 10;
`
export const Bar = styled.div`
    background-image: url('img/volumeBar@2x.png');
    height: 20px;
    transition: all 0.25s ease;
    background-size: contain;
    ${({ position }) =>
        css`
            transform: translateX(${position - 100}%);
        `}
`
