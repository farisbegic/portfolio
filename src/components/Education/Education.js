import React from "react";
import { EducationContainer, Gymnasium, University, EducationTitle, Date, EducationDescription } from "./Education.elements";
import { SectionLine, SectionTitle, SectionContainer } from "../../globalStyles";
import education from "../../assets/education.png";

const Education = () => {
    return (
        <>
            <SectionContainer id="education">
                <SectionTitle>EDUCATION</SectionTitle>
                <SectionLine />
            </SectionContainer>    
            <EducationContainer>
                <img className="timeline" src={education} alt="education-timeline"/>
               <Gymnasium>
                   <EducationTitle>GIMNAZIJA "VISOKO" VISOKO</EducationTitle>
                   <Date>2015 - 2019</Date>
                   <EducationDescription>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</EducationDescription>
               </Gymnasium>
               <University>
                   <EducationTitle>UNIVERSITY SSST</EducationTitle>
                   <Date>2019 - 2023</Date>
                   <EducationDescription>The point of using Lorem Ipsum is that it has at more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</EducationDescription>
               </University>
            </EducationContainer>
        </>
    )
}

export default Education
