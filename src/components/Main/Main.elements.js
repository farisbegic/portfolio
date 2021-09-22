import styled from "styled-components";
import { Container, Button } from '../../globalStyles';
import github from "../../assets/GitHub.png";
import twitter from "../../assets/Twitter.png";
import linkedin from "../../assets/LinkedIn.png";
import cv from "../../download/CV.pdf";

export const MainContainer = styled(Container)`
    justify-content: space-between;
    ${Container};

    .portrait {
        width: 100%;
        padding: 10px 40px;
        margin: 20px auto;

        @media screen and (max-width: 1180px){
            display: none;
        }
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 10px 40px;

    @media screen and (max-width: 1180px){
        margin: 30px auto;
    }
`;

export const Divider = styled.hr`
    border: 1px solid rgba(228, 228, 228, 1);
    width: 100%;
    margin: 20px 0;
`;

export const SocialIcons = styled.div`
    display: flex;
`;

export const Icon = styled.div`
    padding-right: 10px;
`;

export const PreHeader = styled.h4`
    color: #FF647C;
    font-size: 17px;
    padding: 15px 0%;
    font-weight: bold;
    font-family: "Roboto", sans-serif;

    @media screen and (max-width: 500px){
        font-size: 13px;
    }
`;

export const Header = styled.h1`
    color: #000;
    font-size: 60px;
    font-weight: normal;
    font-family: "Gilroy-Medium", sans-serif;

    @media screen and (max-width: 500px){
        font-size: 40px;
    }
`;

export const AboutText = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    padding-bottom: 20px;
    font-weight: 600;
    font-family: "Gilroy-Medium", sans-serif;
    letter-spacing: 0.02em;
    line-height: 25px;

    @media screen and (max-width: 500px){
        font-size: 12px;
    }
`; 

const DownloadButton = styled(Button)`
    ${Button};
    width: 325px;
    cursor: pointer;

    @media screen and (max-width: 1180px){
        width:100%;
    }
`;

export const Btn = () => {
    return <a href={cv} download><DownloadButton>Download my CV</DownloadButton> </a>
}

export const Twitter = () => {
    return <a href="https://twitter.com/fabegic" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
}

export const GitHub = () => {
    return <a href="https://github.com/farisbegic" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
}

export const LinkedIn = () => {
    return <a href="https://www.linkedin.com/in/begicfaris/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
}