import React, { useEffect, useState }  from "react";
import styled, { keyframes } from "styled-components";
import ArticleDecorator from "../../components/textDecorator/ArticleDecorator";
import TextDecorator from "../../components/textDecorator/TextDecorator";
import { useWindowSize } from "../../hooks/useWindowSize";
import MetaButton from "../../components/buttons/MetaButton";
import HeaderV3 from "../../components/header/HeaderV3";
import contract from "../../contracts/Poolnft.json";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { ethers } from "ethers";
import Swal from "sweetalert2";

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
`;

const Container = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100vw;
    height: ${(props) => props.height}px;
    background-image: url("assets/images/backgrounds/2560/section1.png");
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-position: center;
    @media (max-width: 1920px) {
        background-image: url("assets/images/backgrounds/1920/section1.png");
    }
    @media (max-width: 1440px) {
        background-image: url("assets/images/backgrounds/welcome.png");
    }
    @media (max-width: 1280px) {
        background-image: url("assets/images/backgrounds/1280/section1.png");
    }
    @media (max-width: 490px) {
        background-image: url("assets/images/backgrounds/mobile/section1.png");
    }
`;

const ButtonArea = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    width: 100%;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;
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
`;
const ButtonEffect = styled.div`
    -webkit-animation: ${ButtonEffectAnimation} 0.27s both ease-in;
    animation: ${ButtonEffectAnimation} 0.27s both ease-in;
    -webkit-animation-delay: ${(props) => props.time}s;
    animation-delay: ${(props) => props.time}s;
    opacity: 1;
    margin-left: 64px;
    @media (max-width: 700px) {
        margin-left: 0px;
    }
`;

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
    height: ${(props) => props.height - 194}px;

    @media (max-width: 1920px) {
        width: 506px;
    }
    @media (max-width: 490px) {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        width: 100%;
    }
`;

const WelcomeBodyContainer = styled.div`
    width: calc(100vw - 120px);
    max-width: 1800px;
    @media (max-width: 768px) {
        width: calc(100vw - 48px);
    }
`;
const HeaderContainer = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex: 0 0 auto;
    position: absolute;
`;

const contractAddress = "0xfFc4C9ec98E83c89D3A2326e95Aa735adEc6E1dD";
const abi = contract.abi;


export default function Launchpad() {
    const size = useWindowSize();
    const [mintedNFT, setMintedNFT] = useState([]);

    const [currentAccount, setCurrentAccount] = useState(null);

    const [loading, setLoading] = useState(true);


    const checkWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have Metamask installed!");
            return;
        } else {
            console.log("Wallet exists! We're ready to go!");
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account: ", account);
            setCurrentAccount(account);
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(
                    contractAddress,
                    abi,
                    signer
                );
                let totalTokenIds = await nftContract.walletOfOwner(
                    account
                );
                let tempMintedNFT = [];
                for (let i = 0; i < totalTokenIds.length; i++) {
                    tempMintedNFT.push(parseInt(totalTokenIds[i]));
                }
                setMintedNFT(tempMintedNFT);
            }
        } else {
            console.log("No authorized account found");
        }
    };

    const connectWalletHandler = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            // alert("Please install Metamask!");
            Swal.fire({
                icon: "info",
                text: "Please install Metamask!",
            });
        }

        try {
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log("Found an account! Address: ", accounts[0]);
            setCurrentAccount(accounts[0]);
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(
                    contractAddress,
                    abi,
                    signer
                );
                let totalTokenIds = await nftContract.walletOfOwner(
                    accounts[0]
                );
                let tempMintedNFT = [];
                for (let i = 0; i < totalTokenIds.length; i++) {
                    tempMintedNFT.push(parseInt(totalTokenIds[i]));
                }
                setMintedNFT(tempMintedNFT);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const mintNftHandler = async () => {
        setLoading(true);
        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(
                    contractAddress,
                    abi,
                    signer
                );

                console.log("Initialize payment");

                let val = await nftContract._tokenFree(currentAccount);
                console.log(val);
                let nftTxn;
                if (val) {
                    nftTxn = await nftContract.mint({
                        value: ethers.utils.parseEther("0.025"),
                    });
                } else {
                    nftTxn = await nftContract.mint();
                }
                console.log(nftTxn);
                console.log("Mining... please wait");
                await nftTxn.wait();
                // console.log(nftTxn);

                let totalTokenIds = await nftContract.walletOfOwner(
                    currentAccount
                );
                let tempMintedNFT = [];
                for (let i = 0; i < totalTokenIds.length; i++) {
                    tempMintedNFT.push(parseInt(totalTokenIds[i]));
                }
                setMintedNFT(tempMintedNFT);

                Swal.fire({
                    icon: "success",
                    text: `Success, see transaction: https://ropsten.etherscan.io/tx/${nftTxn.hash}`,
                });
            } else {
                console.log("Ethereum object does not exist");
            }
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    const connectWalletButton = () => {
        return (
            <div onClick={connectWalletHandler}>
                <ButtonEffect time={1}>
                    <MetaButton
                        marginTop={"5vh"}
                        background={"#FF1C6E"}
                        content="C o n n e c t"
                    />
                </ButtonEffect>
            </div>
        );
    };

    const mintNftButton = () => {
        return (
            <div onClick={mintNftHandler}>
                <ButtonEffect time={1}>
                    <MetaButton
                        marginTop={"5vh"}
                        background={"#FF1C6E"}
                        content="M i n t"
                    />
                </ButtonEffect>
            </div>
        );
    };
    useEffect(async () => {
        setLoading(true);
        checkWalletIsConnected();
        setLoading(false);
    }, []);
    return (
        <>
            <HeaderContainer>
                <HeaderV3></HeaderV3>
            </HeaderContainer>
            <div style={{ padding: "3%", paddingTop:'150px' }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{
                        400: 1,
                        800: 2,
                        1200: 3,
                        1400: 4,
                    }}
                >
                    <Masonry>
                        {mintedNFT.map(function (i) {
                            return (
                                <div
                                    className="profile-card-4 text-center"
                                    // style={{
                                    //     border:
                                    //         selectedNFT[i] === true
                                    //             ? "10px solid green"
                                    //             : "10px solid white",
                                    // }}
                                    // onClick={(e) => clickNFT(e, i)}
                                    key={i}
                                >
                                    <img
                                        alt=""
                                        src={`https://ipfs.io/ipfs/QmRQAVW68qLYn1gVPuecXdTbgiDWhjkBsTgJmZaaFBVsbL/${i}.png`}
                                        style={{ width: "330px" }}
                                        className="img img-responsive"
                                    />
                                    <div className="profile-content">
                                        <div className="profile-description">
                                            <p
                                                style={{
                                                    fontFamily: "cursive",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                PoolData #{i}
                                            </p>
                                            <p
                                                style={{
                                                    fontFamily: "cursive",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                0.025 ETH
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
}
