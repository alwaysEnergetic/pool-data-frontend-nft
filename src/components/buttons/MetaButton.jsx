import React from 'react';
import styled, { keyframes } from 'styled-components';

const animateRight = keyframes`
    0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
    }
    100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
    }
`
const animateLeft = keyframes`
    0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
    }
    100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
    }
`
const animateBottom = keyframes`
    0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
    }
    100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
    }
`
const animateTop = keyframes`
    0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
    }
    100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
    }
`
const MetaButtonStyle = styled.div`
   background-size: 100% 100%;
    position: relative;
    width: 189px;
    height: 58px;
    display: inline-flex;
    transform: translate(0%, 0%);
    overflow: hidden;
    color: #f7d4d4;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    -webkit-transform: translate(0%, 0%);
    &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #ad8585;
        opacity: 0;
        -webkit-transition: .1s opacity ease-in-out;
        transition: .1s opacity ease-in-out;
    }
    &:hover::before {
        opacity: 0.2;
    }

    >span {
        position: absolute;
    }

    :hover svg {
        fill: #FF1C6E;
    }

    &:hover > span:nth-child(1) {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 8, 0)), to(#ffffff));
        background: linear-gradient(to left, rgba(43, 8, 8, 0), #ffffff);
        -webkit-animation: 1s ${animateTop} linear infinite;
                animation: 1s ${animateTop} linear infinite;
    }
    &:hover > span:nth-child(2) {
        top: 0px;
        right: 0px;
        height: 100%;
        width: 2px;
        background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 8, 0)), to(#ffffff));
        background: linear-gradient(to top, rgba(43, 8, 8, 0), #ffffff);
        -webkit-animation: 1s ${animateRight} linear  infinite;
                animation: 1s ${animateRight} linear  infinite;
    }

    &:hover > span:nth-child(3) {
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 2px;
        background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 8, 0)), to(#ffffff));
        background: linear-gradient(to right, rgba(43, 8, 8, 0), #ffffff);
        -webkit-animation: 1s ${animateBottom} linear infinite;
                animation: 1s ${animateBottom} linear infinite;
    }
    &:hover > span:nth-child(4) {
        top: 0px;
        left: 0px;
        height: 100%;
        width: 2px;
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 8, 0)), to(#ffffff));
        background: linear-gradient(to bottom, rgba(43, 8, 8, 0), #ffffff);
        -webkit-animation: 1s ${animateLeft} linear  infinite;
                animation: 1s ${animateLeft} linear  infinite;
    }

    >span:nth-child(5) {
        z-index: 20;
    }

    &::after {
        background: #fff;
        content: "";
        height: 155px;
        left: -75px;
        opacity: .2;
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 50px;
        z-index: -10;
    }
    &:hover::after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    &:active svg>path {
        fill: #FF1C6E;
        stroke: #FF1C6E;
    }



`;
const MetaButtonContentStyle = styled.div`
    width: 100%;
    font-family: "Kusanagi";
    font-size: 14px;
    letter-spacing: 0px;
    text-transform: uppercase;
    font-weight: 400;
    color: white;
    z-index: 1;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

const MetaButtonBody = styled.svg`
    width: 189px;

`
const MetaButtonIcon = styled.svg`
    width: 41px;
`
const MetaButtonCornerLeftUp = styled.svg`
    width: 16px;
    position: absolute;
    left: 0px;

`
const MetaButtonCornerLeftDown = styled.svg`
    width: 16px;
    position: absolute;
    left: 0px;
    bottom: 0px;

`
const MetaButtonCornerRightUp = styled.svg`
    width: 16px;
    position: absolute;
    right: 0px;

`
const MetaButtonCornerRightDown = styled.svg`
    width: 16px;
    position: absolute;
    right: 0px;
    bottom: 0px;

`


export default function MetaButton({ content, marginTop = '0px', marginLeft = '0px', marginRight = '0px', marginBottom = '0px', margin, background = 'white', icon = "" }) {
    return (
        <div >
            <MetaButtonStyle marginTop={marginTop} marginLeft={marginLeft} marginRight={marginRight} marginBottom={marginBottom} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div style={{ position: "absolute", zIndex: '-1' }}>
                    <MetaButtonBody width="191" height="58" viewBox="0 0 191 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 36V1H170L190 22V57H21L1 36Z" fill={background} fillOpacity="0.3" stroke={background} strokeWidth="2"/>
                    </MetaButtonBody>
                </div>
                <MetaButtonContentStyle>
                    {
                        icon === "twitter" ? <MetaButtonIcon viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md-hidden">
                            <path d="M17.5921 2.33212C17.3093 2.45754 17.0186 2.56339 16.7215 2.64932C17.0732 2.25158 17.3414 1.78358 17.5051 1.27145C17.5418 1.15666 17.5037 1.03101 17.4094 0.955928C17.3151 0.880793 17.1842 0.871793 17.0804 0.933283C16.4496 1.30745 15.7689 1.57635 15.0553 1.73359C14.3364 1.03112 13.36 0.631348 12.3506 0.631348C10.2199 0.631348 8.48643 2.36475 8.48643 4.49537C8.48643 4.66317 8.49706 4.83005 8.51808 4.99461C5.87411 4.76247 3.41606 3.46292 1.72813 1.3924C1.66797 1.3186 1.5753 1.27883 1.48043 1.28643C1.38549 1.29386 1.30019 1.3474 1.25223 1.42968C0.909883 2.01712 0.728896 2.68898 0.728896 3.37257C0.728896 4.30364 1.06132 5.18703 1.64852 5.8773C1.46997 5.81547 1.29671 5.73818 1.13134 5.64638C1.04256 5.59697 0.934212 5.59772 0.846012 5.6483C0.757754 5.69887 0.702419 5.79189 0.700096 5.89356C0.69969 5.91069 0.69969 5.92782 0.69969 5.94518C0.69969 7.33496 1.44768 8.58619 2.59126 9.26816C2.49301 9.25834 2.39483 9.24412 2.29728 9.22548C2.19671 9.20626 2.0933 9.2415 2.02548 9.31821C1.95754 9.39485 1.93507 9.50169 1.96637 9.59924C2.38966 10.9208 3.47947 11.8928 4.79695 12.1892C3.70424 12.8736 2.45463 13.2321 1.14284 13.2321C0.869122 13.2321 0.593838 13.216 0.324419 13.1841C0.19058 13.1682 0.0626059 13.2473 0.0170252 13.3745C-0.0285554 13.5019 0.0197542 13.6438 0.133619 13.7168C1.81883 14.7974 3.76741 15.3685 5.76861 15.3685C9.70271 15.3685 12.1638 13.5133 13.5355 11.957C15.2461 10.0164 16.2272 7.44783 16.2272 4.90989C16.2272 4.80386 16.2256 4.69679 16.2223 4.59007C16.8972 4.0816 17.4782 3.46623 17.9511 2.75895C18.0229 2.65153 18.0151 2.50956 17.9319 2.41068C17.8488 2.31174 17.7103 2.27974 17.5921 2.33212Z" fill="white" />
                        </MetaButtonIcon>
                            : icon === "discord" ?
                                <MetaButtonIcon viewBox="0 -28.5 256 256" version="1.1" className="md-hidden">
                                    <g>
                                        <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill={'white'} fillRule="nonzero"></path>
                                    </g>
                                </MetaButtonIcon>

                                : ""
                    }
                    {content}
                </MetaButtonContentStyle>
                <MetaButtonCornerLeftUp viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0.000488281L0 16.0005V0.000488281H16Z" fill={background} />
                </MetaButtonCornerLeftUp>
                <MetaButtonCornerLeftDown viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-6.99382e-07 0.00244236L16 16.0024L0 16.0024L-6.99382e-07 0.00244236Z" fill={background} />
                </MetaButtonCornerLeftDown>
                <MetaButtonCornerRightUp viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.000488281L16 16.0005V0.000488281H0Z" fill={background} />
                </MetaButtonCornerRightUp>
                <MetaButtonCornerRightDown viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0.00244236L0 16.0024L16 16.0024L16 0.00244236Z" fill={background} />
                </MetaButtonCornerRightDown>
            </MetaButtonStyle>
        </div>
    )
}
 

 