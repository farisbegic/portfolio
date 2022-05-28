import React, {useEffect, useState} from "react";
import {VerticalTimelineElement} from 'react-vertical-timeline-component';
import {FaUniversity} from "react-icons/all";
import 'react-vertical-timeline-component/style.min.css';
import {TimelineElements} from "./Education.elements";
import {SectionContainer, SectionLine, SectionTitle} from "../../globalStyles";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../../firebase";

const Education = () => {
    const [education, setEducation] = useState([]);
    const educationData = async () => {
        const querySnapshot = await query(collection(db, 'education'), orderBy('number', 'asc'));
        const queryData = await getDocs(querySnapshot);
        const data = queryData.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setEducation(data);
    }

    useEffect(() => {
        educationData();
    }, []);
    return (
        <>
            <SectionContainer id="education">
                <SectionTitle>EDUCATION & EXPERIENCE</SectionTitle>
                <SectionLine/>
            </SectionContainer>
            <TimelineElements>
                {
                    education && education.map((unit) => (
                        <VerticalTimelineElement
                            key={unit.id}
                            className="vertical-timeline-element--work"
                            date={unit.date}
                            iconStyle={{background: '#FF647C', color: '#fff'}}
                            icon={<FaUniversity />}
                        >
                            <h3 className="vertical-timeline-element-title">{unit.position}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{unit.company}</h4>
                            <p>
                                {unit.department}
                            </p>
                        </VerticalTimelineElement>
                    ))
                }
            </TimelineElements>
        </>
    )
}

export default Education
