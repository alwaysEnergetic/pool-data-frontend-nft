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
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    animation: ${ButtonAnimation} 1.5s 0.5s ease 1;
    animation-fill-mode: both;
    &:hover svg{
        transform: scale(1.2);
        transition: transform 0.5s ease;
    }
    visibility: hidden;
    @media (max-width: 1080px) {
        visibility: visible;
        display: flex;
    }
`

const Icon = styled.svg`
    width: 18px;
`

export default function MenuButton() {
    return (
        <Container>
            <Icon viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="6" width="18" height="3" fill="white" />
                <rect x="8" width="10" height="3" fill="white" />
                <rect y="12" width="10" height="3" fill="white" />
            </Icon>
        </Container>
    )
}