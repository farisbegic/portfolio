import styled from "styled-components";
import {Container, Card, Title, Description} from "../../globalStyles";
import github from "../../assets/GitHubSm.png";
import web from "../../assets/WebSm.png";

export const DividerContainer = styled(Container)`
    ${Container};
    justify-content: center;
    align-items: center;
`;

export const ProjectsContainer = styled(Container)`
    ${Container};
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(3,325px);
    justify-content: space-between;

    @media screen and (max-width: 1180px){
        grid-template-columns: repeat(2,325px);
        justify-content: space-evenly;
    }
`;

export const ProjectCard = styled(Card)`
    ${Card};
    margin: 40px 0;
    transition: all 0.8s ease;

    &:hover{
        box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.4);
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    max-width: 325px;
    height: 251px;
    border-radius: 9px 9px 0 0;
    object-fit: cover;
`;

export const ProjectInformation = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const ProjectTitle = styled(Title)`
    ${Title};
    font-size: 24px;
    text-align: center;
    padding: 15px 0;
`;

export const ProjectDescription = styled(Description)`
    ${Description};
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.02em;
    text-align: center;
    color: rgba(0,0,0,0.9);
    padding: 0 10px;
`;

export const IconGroup = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledGit = styled.img`
    margin: 25px 10px;
`;

StyledGit.defaultProps = {
    src: github
}

const StyledWeb = styled.img`
    margin: 25px 10px;
`;

StyledWeb.defaultProps = {
    src: web
}


export const GitHub = (prop) => {
    return <a href={prop.link} target="_blank" rel="noopener noreferrer"><StyledGit/></a>
}

export const WebPage = (prop) => {
    return <a href={prop.link} target="_blank" rel="noopener noreferrer"><StyledWeb /></a>
}