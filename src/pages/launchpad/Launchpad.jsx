import React from 'react';
import styled, { keyframes } from 'styled-components';
import ArticleDecorator from '../../components/textDecorator/ArticleDecorator';
import TextDecorator from '../../components/textDecorator/TextDecorator';
import { useWindowSize } from '../../hooks/useWindowSize';
import MetaButton from '../../components/buttons/MetaButton';
import HeaderV3 from '../../components/header/HeaderV3';

const ContainerAnimation = keyframes`
    0%{
        -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
                transform: scale(1.2);
    }
    100%{
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
                transform: scale(1);
    }
`


const Container = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
            flex-direction: column;
    width: 100vw;
    height: ${props => props.height}px;
    background-image : url('assets/images/backgrounds/2560/section1.png');
    background-image:url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-position: center;
    @media(max-width:1920px){
        background-image : url('assets/images/backgrounds/1920/section1.png');
    }
    @media(max-width:1440px){
        background-image : url('assets/images/backgrounds/welcome.png');
    }
    @media (max-width: 1280px) {
        background-image: url('assets/images/backgrounds/1280/section1.png');
    }
    @media(max-width:490px){
        background-image : url('assets/images/backgrounds/mobile/section1.png');
    }
`

const ButtonArea = styled.div`
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
    -ms-flex-direction:row;
            flex-direction:row;
    -webkit-box-align:center;
    -ms-flex-align:center;
            align-items:center;
    -webkit-box-pack:start;
    -ms-flex-pack:start;
            justify-content:flex-start;
    width:100%;
    @media(max-width:768px){
        margin-left:0;
    }
`
const ButtonEffectAnimation = keyframes`
    0%{
        opacity:0;
    }
    40%{
        opacity:0.9;
    }
    60%
    {
        opacity: 0.2;
    }
    70%
    {
        opacity: 0.9;
    }
    80%
    {
        opacity: 0.2;
    }
    100%{
        opacity: 1;
    }
`
const ButtonEffect = styled.div`
    -webkit-animation: ${ButtonEffectAnimation} 0.27s both  ease-in ;
    animation: ${ButtonEffectAnimation} 0.27s both  ease-in ;
    -webkit-animation-delay: ${props => props.time}s;
            animation-delay: ${props => props.time}s;
    opacity:1;
    margin-left: 64px;
    @media (max-width: 700px) {
        margin-left: 0px;
    }
`

const BodyContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
            justify-content: center;
    width: 724px;
    /* height: calc(100vh - 194px); */
    height:  ${props => props.height - 194}px;

    @media (max-width: 1920px) {
        width: 506px;
    }
    @media (max-width: 490px) {
        -webkit-box-pack: end;
            -ms-flex-pack: end;
                justify-content: flex-end;
                width: 100%;
    }
`

const WelcomeBodyContainer = styled.div`
    width: calc(100vw - 120px);
    max-width: 1800px;
    @media (max-width: 768px) {
        width: calc(100vw - 48px);
    }
`
const HeaderContainer = styled.div`
    width: 100vw;
    height: 110px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex: 0 0 auto;
    position: absolute;
`
export default function Launchpad() {
    const size = useWindowSize();
    return (
        <>
            <HeaderContainer>
                <HeaderV3></HeaderV3>
            </HeaderContainer>
            <Container height={size.height}>
                <WelcomeBodyContainer  >
                    <BodyContainer height={size.height}>
                        <TextDecorator uppercase="none" delay={0.5} direction='up' content='welcome to' fontFamily='Kusanagi' fontSize={size.width <= 550 ? 24 : size.width <= 1280 ? 40 : 54}></TextDecorator>
                        <TextDecorator delay={0.5} direction='down' content='pooldata' fontFamily='Kusanagi' fontSize={size.width <= 550 ? 29 : size.width <= 1280 ? 56 : 64}></TextDecorator>
                        <ButtonArea>
                            <div>
                                <ButtonEffect time={1}>
                                    <MetaButton marginTop={'5vh'} background={'#FF1C6E'} content='M i n t' />
                                </ButtonEffect>
                            </div>
                        </ButtonArea>
                    </BodyContainer>
                </WelcomeBodyContainer>
            </Container>
            
        </>
    )
}