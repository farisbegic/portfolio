import React, {useEffect, useState} from "react";
import {VerticalTimelineElement} from 'react-vertical-timeline-component';
import {FaUniversity} from "react-icons/all";
import {TimelineElements} from "./Education.elements";
import {SectionContainer, SectionLine, SectionTitle} from "../../globalStyles";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../../firebase";
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
    const [education, setEducation] = useState([]);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const convertDate = (seconds) => {
        var date = new Date(1970, 0, 1);
        date.setSeconds(seconds);
        return monthNames[date.getMonth()] + ' ' + date.getFullYear();
    }

    const educationData = async () => {
        const querySnapshot = await query(collection(db, 'education'), orderBy('timestamp', 'asc'));
        const queryData = await getDocs(querySnapshot);
        const data = queryData.docs.map(doc => ({
            id: doc.id,
            date: convertDate(doc.data().timestamp.seconds),
            ...doc.data()
        }));
        setEducation(data);
    }

    useEffect(() => {
        educationData()
        // eslint-disable-next-line
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
