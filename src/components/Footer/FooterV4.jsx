import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: calc(100vw - 120px);
    max-width: 1800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: calc(100vw - 48px);
    }
`

const FooterLeft = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    @media (max-width: 1450px) {
        display: none;
    }
`
const FooterLeftSmall = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    display: none;
    @media (max-width: 1450px) {
        display: block;
    }
    @media (max-width: 768px) {
        display: none;
    }
`
const FooterRight = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    @media (max-width: 1450px) {
        display: none;
    }
`
const FooterRightSmall = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    display: none;
    @media (max-width: 1450px) {
        display: block;
    }
    @media (max-width: 768px) {
        display: none;
    }
`

const FooterLeftSP = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    display: none;
    @media (max-width: 768px) {
        display: block;
        height: 32.5px;
        margin-top: 20px;
    }
`
const FooterRightSP = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    display: none;
    @media (max-width: 768px) {
        display: block;
        height: 32.5px;
        margin-top: 20px;
    }
`
const MidContainer = styled.div`
    width: 68px;
    height: 71px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.svg`
    cursor: pointer;
    &:hover path {
        opacity: 1;
    }
`

const FooterContent = styled.div`
    font-size: 12px;
    line-height: 14.4px;
    font-family: 'Kusanagi';
    color: white;
    opacity: 0.5;
    display: none;
    @media (max-width: 490px) {
        display: block;
    }
`


export default function FooterV4({setActiveIndex, activeIndex}) {
    return (
        <Container>
            <FooterLeft>
                <img src="assets/images/footer/left/footer.png" style={{ width: '100%', height: '100%', opacity: '0.5' }}></img>
            </FooterLeft>
            <FooterLeftSmall>
                <img src="assets/images/footer/left/footer_small.png" style={{ width: '100%', height: '100%', opacity: '0.5' }}></img>
            </FooterLeftSmall>
            <FooterLeftSP>
                <img src="assets/images/footer/left/footer_sp.png" style={{ width: '100%', height: '100%'}}></img>
            </FooterLeftSP>
            <MidContainer>
                <Button width="55" height="29" viewBox="0 0 55 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M29.5 18L38.5 27H3L28 2L54 28" stroke="white" strokeWidth="2" />
                </Button>
                <FooterContent>
                    SCROLL
                </FooterContent>
                <Button width="49" height="26" viewBox="0 0 49 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L24 24L46 2H14.5L22.5 10" stroke="white" opacity="0.5" strokeWidth="2" />
                </Button>
            </MidContainer>
            <FooterRightSP>
                <img src="assets/images/footer/right/footer_sp.png" style={{ width: '100%', height: '100%'}}></img>
            </FooterRightSP>
            <FooterRightSmall>
                <img src="assets/images/footer/right/footer_small.png" style={{ width: '100%', height: '100%', opacity: '0.5' }}></img>
            </FooterRightSmall>
            <FooterRight>
                <img src="assets/images/footer/right/footer.png" style={{ width: '100%', height: '100%', opacity: '0.5' }}></img>
            </FooterRight>
        </Container>
    )
}