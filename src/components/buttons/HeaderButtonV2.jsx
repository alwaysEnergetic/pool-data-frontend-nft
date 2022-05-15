import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width}px;
    height: 27px;
    overflow: hidden;
    cursor: pointer;
    margin-right: 82px;
`

const AnimationUp = keyframes`
    0% {
        -webkit-transform: translateY(100%);
            -ms-transform: translateY(100%);
                transform: translateY(100%);
    }
    100% {
        -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
                transform: translateY(0);
    }
`
const AnimationDown = keyframes`
    0% {
        -webkit-transform: translateY(-100%);
            -ms-transform: translateY(-100%);
                transform: translateY(-100%);
    }
    100% {
        -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
                transform: translateY(0);
    }
`
const Content = styled.div`
    font-family: 'Kusanagi';
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    -webkit-transform: ${props => props.direction === 'up' ? 'translateY(100%)' : 'translateY(-100%)'};
    -ms-transform: ${props => props.direction === 'up' ? 'translateY(100%)' : 'translateY(-100%)'};
            transform: ${props => props.direction === 'up' ? 'translateY(100%)' : 'translateY(-100%)'};

    
    -webkit-animation:${props => props.direction === 'up' ? AnimationUp : AnimationDown} 1s ease 1;
            animation:${props => props.direction === 'up' ? AnimationUp : AnimationDown} 1s ease 1;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;

    &:hover {
        color: #FF1C6E;
        text-shadow: 0px 4px 6px #FF1C6E;
    }
    &:focus {
        color: #FF1C6E;
        text-shadow: 0px 4px 6px #FF1C6E;
    }
`

export default function HeaderButtonV2({ width = 'fit-content', fontSize = 0, direction = 'up', content = '', fontFamily = 'Kusanagi', callback }) {
    const containerWidth = (content.length * 14) + (content.length * 1) + 10;
    return (
        <Container width={containerWidth} height={fontSize * 1.3} onClick={() => callback ? callback(1) : () => {}}>
            <Content fontSize={fontSize} direction={direction} fontFamily={fontFamily}>
                {content}
            </Content>
        </Container>
    )
}
