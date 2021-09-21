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
        width: 420px;
        padding: 10px;
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
        padding: 10px;
    }
`;


export const EducationTitle = styled(Title)`
    ${Title};
    font-size: 20px;
`;

export const EducationDescription = styled(Description)`
    ${Description};
    font-size: 15px;
`;

export const Date = styled.p`
    font-family: "Gilroy-Light";
    color: rgba(0, 0, 0, 0.8);
    font-size: 17px;
    padding: 10px 0;
`;