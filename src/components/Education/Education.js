import React from "react";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {FaSchool, FaUniversity, MdDeveloperMode, IoIosSchool} from "react-icons/all";
import 'react-vertical-timeline-component/style.min.css';
import {
    TimelineElements
} from "./Education.elements";
import { SectionLine, SectionTitle, SectionContainer } from "../../globalStyles";

const Education = () => {
    return (
        <>
            <SectionContainer id="education">
                <SectionTitle>EDUCATION</SectionTitle>
                <SectionLine />
            </SectionContainer>
            <TimelineElements>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015 - 2019"
                    iconStyle={{ background: '#FF647C', color: '#fff' }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Scholar</h3>
                    <h4 className="vertical-timeline-element-subtitle">Gimnazija "Visoko" Visoko</h4>
                    <p>
                        Mathematical-Informatical Department
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019-2023"
                    iconStyle={{ background: '#FF647C', color: '#fff' }}
                    icon={<FaUniversity />}
                >
                    <h3 className="vertical-timeline-element-title">Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">University Sarajevo School of Science and Technology</h4>
                    <p>
                        Computer Science & Information Systems Department
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - Present"
                    iconStyle={{ background: '#FF647C', color: '#fff' }}
                    icon={<IoIosSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Scholar</h3>
                    <h4 className="vertical-timeline-element-subtitle">BH Futures Foundation</h4>
                    <p>
                        Junior Scholar
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - Present"
                    iconStyle={{ background: '#FF647C', color: '#fff' }}
                    icon={<MdDeveloperMode />}
                >
                    <h3 className="vertical-timeline-element-title">Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Futures Leaders Summit</h4>
                    <p>
                        Web Development Department
                    </p>
                </VerticalTimelineElement>
            </TimelineElements>
            {/*}
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
            {*/}
        </>
    )
}

export default Education
