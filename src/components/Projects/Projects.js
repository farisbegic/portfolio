import React, {useEffect, useState} from "react";
import {SectionContainer, SectionLine, SectionTitle} from "../../globalStyles";
import {
    GitHub,
    IconGroup,
    ImageSection,
    ProjectCard,
    ProjectDescription,
    ProjectImage,
    ProjectInformation,
    ProjectsContainer,
    ProjectTitle,
    WebPage
} from "./Projects.elements";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../firebase";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    const projectData = async () => {
        const querySnapshot = await query(collection(db, 'projects'));
        const queryData = await getDocs(querySnapshot);
        const data = queryData.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setProjects(data);
    }

    useEffect(() => {
        projectData();
    }, []);

    return (
        <>
            <SectionContainer id="projects">
                <SectionTitle>PROJECTS</SectionTitle>
                <SectionLine />
            </SectionContainer>
            <ProjectsContainer>
                {projects.map(( {id, title, image, description, github, web} ) => (
                    <ProjectCard key={id}>
                        <ImageSection>
                            <ProjectImage src={image} alt={title}/>
                        </ImageSection>
                        <ProjectInformation>
                            <ProjectTitle>{title}</ProjectTitle>
                            <ProjectDescription>{description}</ProjectDescription>
                            <IconGroup>
                                {github != null && <GitHub link={github} />}
                                {web != null && <WebPage link={web} />}
                            </IconGroup>
                        </ProjectInformation>
                    </ProjectCard>
                ))}
            </ProjectsContainer>
        </>
    )
}

export default Projects
