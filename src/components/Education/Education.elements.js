import styled from "styled-components";
import { Container, Title, Description } from "../../globalStyles";

export const EducationContainer = styled(Container)`
    ${Container};
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 1180px){
        .timeline{
            display: none;
        }
    }

    @media screen and (max-width: 750px){
        width: 100%;
        margin: 0 auto;
    }
`;

const TimelineBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const Gymnasium = styled(TimelineBox)`
    ${TimelineBox};
    position: absolute;
    right: 170px;
    top: 140px;
    width: 343px;

    @media screen and (max-width: 1180px){
        position: static;
        border-radius: 5px;
        text-align: left;
        width: 100%;
        padding: 0 40px;
    }
`;

export const University = styled(TimelineBox)`
    ${TimelineBox};
    position: absolute;
    left: 95px;
    top: 290px;
    text-align: right;
    width: 420px;

    @media screen and (max-width: 1180px){
        position: static;
        border-radius: 5px;
        text-align: left;
        margin: 25px 0;
        padding: 10px 40px;
        width: 100%;
    }
`;


export const EducationTitle = styled(Title)`
    ${Title};
    font-size: 25px;

    @media screen and (max-width: 500px){
        font-size: 18px;
    }
`;

export const EducationDescription = styled(Description)`
    ${Description};
    font-size: 18px;

    @media screen and (max-width: 500px){
        font-size: 14px;
        word-wrap: break-word;
    }
`;

export const Date = styled.p`
    font-family: "Gilroy-Light";
    color: rgba(0, 0, 0, 0.8);
    font-size: 19px;
    padding: 10px 0;

    @media screen and (max-width: 500px){
        font-size: 15px;
    }
`;