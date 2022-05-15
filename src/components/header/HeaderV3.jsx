import React from 'react';
import styled, { keyframes } from 'styled-components';
import TwitterButton from '../buttons/TwitterButton';
import DiscordButton from '../buttons/DiscordButton';
import MenuButton from '../buttons/MenuButton';
import HeaderButtonV2 from '../buttons/HeaderButtonV2';
import { useNavigate, useLocation } from 'react-router-dom';

const HeaderLeftLineAnimation = keyframes`
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`
const HeaderRightLineAnimation = keyframes`
  0% {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  100% {
    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
  }
`

const HeaderLeftLineUpper = styled.img`
  position: absolute;
  top: 0px;
  width: 508px;
  height: auto;
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: ${HeaderLeftLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  @media (max-width: 2560px) {
      width: 746px;
  }
  @media (max-width: 1920px) {
    width: calc(45.84vw - 159px);
  }

`
const HeaderLeftLineDown = styled.img`
  position: absolute;
  bottom: 0px;
  width: 508px;
  height: auto;
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: ${HeaderLeftLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  @media (max-width: 2560px) {
      width: 746px;
  }
  @media (max-width: 1920px) {
    width: calc(45.84vw - 159px);
  }
`
const HeaderRightLineUpper = styled.img`
  position: absolute;
  top: 0px;
  width: 100%;
  height: auto;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  animation: ${HeaderRightLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;

  @media (max-width: 1100px) {
    display: none;
  }
`
const HeaderRightLineSmallUpper = styled.img`
  position: absolute;
  top: 0px;
  width: 100%;
  height: auto;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  animation: ${HeaderRightLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`

const HeaderRightLineDown = styled.img`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: auto;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  animation: ${HeaderRightLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  @media (max-width: 1100px) {
    display: none;
  }
`
const HeaderRightLineSmallDown = styled.img`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: auto;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  animation: ${HeaderRightLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`

const HeaderLeftContainer = styled.div`
  width: 508px;
  height: 80px;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 2560px) {
      width: 746px;
  }
  @media (max-width: 1920px) {
    width: calc(45.84vw - 159px);
  }
  @media (max-width: 1280px) {
    height: 64px;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`
const HeaderRightContainer = styled.div`
  width: 508px;
  height: 80px;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 2560px) {
      width: 746px;
  }
  @media (max-width: 1920px) {
    width: calc(45.84vw - 159px);
  }
  @media (max-width: 1280px) {
    height: 64px;
  }
  @media (max-width: 1100px) {
    width: 185px;
    margin-left: 15px
  }
  @media (max-width: 745px) {
    height: 68px;
  }
`

const PatternLeft = styled.svg`
  margin-left: 16px;
  margin-top: 4px;
  width: 52px;
  @media (max-width: 1100px) {
    margin-left: 0px;
  }
  @media (max-width: 1280px) {
    height: 64px;
  }
  @media (max-width: 745px) {
    width: 44px;
    margin-left: 0px;
  }
`

const MdHidden = styled.div`
  @media (max-width: 1100px) {
    display: none;
  }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    top: 30px;
    width: calc(100vw - 120px);
    max-width: 1800px;
    height: fit-content;
    align-items: center;
    @media (max-width: 768px) {
        width: calc(100vw - 48px);
        top: 16px;
    }
`

function HeaderV3({ setActiveIndex }) {
  const navigate = useNavigate();
  const location = useLocation();

  const homeButtonHandler = (value) => {
    console.log("current url: ", location)
    if (location.pathname == '/') {
      if (setActiveIndex) {
        setActiveIndex(value);
      }
    } else {
      navigate('/');
    }
  }
  return (
    <HeaderContainer>
      <div>
        <HeaderLeftContainer>
          <HeaderLeftLineUpper src="assets/images/header/leftline.png"></HeaderLeftLineUpper>

          <svg style={{ position: 'absolute', right: '0px' }} width="47" height="15" viewBox="0 0 47 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='path' d="M0.5 3.5V1H14L6.5 8.5H0.5" stroke="white" strokeWidth='2' opacity='0.5' />
            <path className='path' d="M0 14.5H10.5L24 1H47" stroke="white" strokeWidth='2' opacity='0.5' />
            <path className='path' d="M30 9.5L33.5 6H27.5L19.5 14H32.5L40.5 6" stroke="white" strokeWidth='2' opacity='0.5' />
          </svg>
          <HeaderButtonV2 content='home' callback={homeButtonHandler}></HeaderButtonV2>
          {/* <HeaderButtonV2 content='launchpad' callback={homeButtonHandler}></HeaderButtonV2> */}
          {/* <HeaderButtonV2 content='launchpad' callback={() => navigate('/launchpad')}></HeaderButtonV2> */}
          <HeaderLeftLineDown src="assets/images/header/leftline.png"></HeaderLeftLineDown>
        </HeaderLeftContainer>
      </div>
      <div>
        <PatternLeft viewBox="0 0 52 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className='path' d="M13.5 1.5L27 15L40.5 1.5" stroke="white" strokeWidth='2' opacity='0.5' />
          <path className='path' d="M0.5 1L21.5 20.5" stroke="white" strokeWidth='2' opacity='0.5' />
          <path className='path' d="M13.5 81L27 67.5L40.5 81" stroke="white" strokeWidth='2' opacity='0.5' />
          <path className='path' d="M16 27L1.5 41L16 55" stroke="white" strokeWidth='2' opacity='0.5' />
          <path className='path' d="M21 62L1.5 81" stroke="white" strokeWidth='2' opacity='0.5' />
          <path className='path' d="M51.5 3L13.5 41L51.5 79" stroke="white" strokeWidth='2' opacity='0.5' />
        </PatternLeft>
      </div>
      <div style={{color:'white', fontFamily:'Kusanagi'}}>POOLDATA</div>
      <div style={{ transform: 'scale(-1, 1)' }}>
        <PatternLeft viewBox="0 0 52 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className='path' d="M13.5 1.5L27 15L40.5 1.5" stroke="white" strokeWidth='2' opacity='0.5' />
          <path className='path' d="M0.5 1L21.5 20.5" stroke="white" strokeWidth='2' opacity='0.5' />
          <path className='path' d="M13.5 81L27 67.5L40.5 81" stroke="white" strokeWidth='2' opacity='0.5' />
          <path className='path' d="M16 27L1.5 41L16 55" stroke="white" strokeWidth='2' opacity='0.5' />
          <path className='path' d="M21 62L1.5 81" stroke="white" strokeWidth='2' opacity='0.5' />
          <path className='path' d="M51.5 3L13.5 41L51.5 79" stroke="white" strokeWidth='2' opacity='0.5' />
        </PatternLeft>
      </div>
      <HeaderRightContainer>
        <HeaderRightLineUpper src="assets/images/header/rightline.png"></HeaderRightLineUpper>
        <HeaderRightLineSmallUpper src="assets/images/header/rightline_small.png"></HeaderRightLineSmallUpper>
        <svg style={{ position: 'absolute', left: '0px' }} width="47" height="15" viewBox="0 0 47 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className='path' d="M0 1H23L36.5 14.5H47" stroke="white" strokeWidth={2} opacity={0.5} />
          <path className='path' d="M46.5 3.5V1H33L40.5 8.5H46.5" stroke="white" strokeWidth={2} opacity={0.5} />
          <path className='path' d="M6.5 6L14.5 14H27L19 6H13.5L17 9.5" stroke="white" strokeWidth={2} opacity={0.5} />
        </svg>
        <MdHidden>
          <TwitterButton></TwitterButton>
        </MdHidden>
        <MdHidden>
          <DiscordButton></DiscordButton>
        </MdHidden>

        <MenuButton></MenuButton>
        <HeaderRightLineSmallDown src="assets/images/header/rightline_small.png"></HeaderRightLineSmallDown>
        <HeaderRightLineDown src="assets/images/header/rightline.png"></HeaderRightLineDown>
      </HeaderRightContainer>
    </HeaderContainer>

  );
}

export default HeaderV3;


