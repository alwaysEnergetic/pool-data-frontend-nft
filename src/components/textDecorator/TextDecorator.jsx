import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    width: ${props => props.width};
    height: fit-content;
    overflow: hidden;
    @media(max-width:490px){
        height: fit-content;
    } 
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
    font-family: ${props => props.fontFamily};
    font-size: ${props => `${props.fontSize}px`};
    text-transform: ${props =>props.uppercase};
    color: white;
    -webkit-transform: ${props => props.direction == 'up' ? 'translateY(100%)' : 'translateY(-100%)'};
    -ms-transform: ${props => props.direction == 'up' ? 'translateY(100%)' : 'translateY(-100%)'};
            transform: ${props => props.direction == 'up' ? 'translateY(100%)' : 'translateY(-100%)'};
    -webkit-animation:${props => props.direction == 'up' ? AnimationUp : AnimationDown} 1s ease 1;
            animation:${props => props.direction == 'up' ? AnimationUp : AnimationDown} 1s ease 1;
            animation-delay: ${props => props.delay}s;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    @media(max-width:768px){
        word-wrap: break-word;
        font-size: ${props => `${props.smFontSize}px`};
    }        
`

export default function TextDecorator ({uppercase='uppercase', width='fit-content', fontSize=0, direction='up', content='', fontFamily='Kusanagi',smFontSize =24, delay=0}) {
    return (
        <Container  width={width} height={fontSize * 1.3} smHeight={smFontSize * 1.3}>
            <Content  uppercase={uppercase} fontSize={fontSize} direction={direction} fontFamily={fontFamily} smFontSize={smFontSize} delay={delay}>
                {content}
            </Content>
        </Container>
    )
}