import React from "react";
import { SectionTitle, SectionLine, SectionContainer } from "../../globalStyles";
import {v4 as uuid4} from "uuid";
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectInformation, ProjectTitle, ProjectDescription, GitHub, WebPage, IconGroup } from "./Projects.elements";
import visitbosnia from "../../assets/visitbosnia.png";
import zajafon from "../../assets/zajafon.png";
import portfolio from "../../assets/portfolio.png";
import tindog from "../../assets/tindog.png";
import optikabegic from "../../assets/optikabegic.png";

export const projects = [
    {
        id: uuid4(),
        title: "VISIT BOSNIA",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        image: visitbosnia,
        github: "https://github.com/farisbegic/VisitBosnia",
        web: "http://visitbosnia.azurewebsites.net/"
    },
    {
        id: uuid4(),
        title: "ZAJAFON",
        image: zajafon,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        github: "https://github.com/farisbegic/zajafon",
        web: "https://zajafon.com/"
    },
    {
        id: uuid4(),
        title: "PORTFOLIO",
        image: portfolio,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        github: "https://github.com/farisbegic/portfolio",
        web: "https://farisbegic.github.io/portfolio/"
    },
    {
        id: uuid4(),
        title: "OPTIKA BEGIĆ",
        image: optikabegic,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        github: "https://github.com/farisbegic/portfolio",
        web: "https://optikabegic.com"
    },
    {
        id: uuid4(),
        title: "TinDog",
        image: tindog,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        github: "https://github.com/farisbegic/tin-dog",
        web: "https://farisbegic.github.io/tin-dog/"
    }
]

const Projects = () => {
    return (
        <>
            <SectionContainer id="projects">
                <SectionTitle>PROJECTS</SectionTitle>
                <SectionLine />
            </SectionContainer>
            <ProjectsContainer>
                {projects.map(( {id, title, image, description, github, web} ) => (
                    <ProjectCard key={id}>
                        <ProjectImage src={image} alt={title}/>
                        <ProjectInformation>
                            <ProjectTitle>{title}</ProjectTitle>
                            <ProjectDescription>{description}</ProjectDescription>
                            <IconGroup>
                                {github != null ? <GitHub link={github} /> : ''} 
                                {web != null ? <WebPage link={web} /> : ''}
                            </IconGroup>
                        </ProjectInformation>
                    </ProjectCard>
                ))}
            </ProjectsContainer>    
        </>
    )
}

export default Projects
