import React from 'react';
import styled, { keyframes } from 'styled-components';

const ButtonAnimation = keyframes`
    0%{
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`

const Container = styled.div`
    transform: scale(0);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    animation: ${ButtonAnimation} 1.5s 0.5s ease 1;
    animation-fill-mode: both;
    &:hover img{
        transform: scale(1.2);
        transition: transform 0.5s ease;
    }
    @media (max-width: 490px) {
        display: none;
    }
`

const Icon = styled.svg`
    width: 18px;
`

export default function DiscordButton() {
    return (
        <Container>
            <img src="assets/images/discord2.svg" style={{height:'21px'}}></img>
        </Container>
    )
}