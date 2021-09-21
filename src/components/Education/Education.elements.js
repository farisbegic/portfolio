import styled from "styled-components";
import { Container, Title, Description } from "../../globalStyles";
import education from "../../assets/education.png";

export const EducationContainer = styled(Container)`
    ${Container};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const EducationTimeline = () => {
    return <img src={education} alt="education-timeline" />
};

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
`;

export const University = styled(TimelineBox)`
    ${TimelineBox};
    position: absolute;
    left: 95px;
    top: 290px;
    text-align: right;
    width: 420px;
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