import React from "react";
import { SectionTitle, SectionLine, SectionContainer } from "../../globalStyles";
import {v4 as uuid4} from "uuid";
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectInformation, ProjectTitle, ProjectDescription, GitHub, WebPage, IconGroup } from "./Projects.elements";
import visitbosnia from "../../assets/visitbosnia.png";
import zajafon from "../../assets/zajafon.png";
import rubicon360 from "../../assets/rubicon360.png";

export const projects = [
    {
        id: uuid4(),
        title: "VISIT BOSNIA",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        image: visitbosnia,
        github: "https://github.com/farisbegic/VisitBosnia",
        web: null
    },
    {
        id: uuid4(),
        title: "ZAJAFON",
        image: zajafon,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        github: null,
        web: "https://zajafon.com/"
    },
    {
        id: uuid4(),
        title: "RUBICON 360",
        image: rubicon360,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        github: null,
        web: "https://zajafon.com/"
    }
]

const Projects = () => {
    return (
        <>
            <SectionContainer>
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
                                <GitHub link={github} />
                                <WebPage link={web} />
                            </IconGroup>
                        </ProjectInformation>
                    </ProjectCard>
                ))}
            </ProjectsContainer>    
        </>
    )
}

export default Projects
