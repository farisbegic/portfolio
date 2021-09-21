import React from "react";
import { SectionTitle, SectionLine } from "../../globalStyles";
import { TechnologiesContainer, TechnologiesCard, Technology, IconText } from "./Technologies.elements";
import html5 from "../../assets/html5.png";
import css3 from "../../assets/css3.png";
import javascript from "../../assets/javascript.png";
import bootstrap from "../../assets/bootstrap.png";
import reactjs from "../../assets/reactjs.png";
import dotnet from "../../assets/dotnet.png";
import java from "../../assets/java.png";
import php from "../../assets/php.png";
import mysql from "../../assets/mysql.png";
import mongodb from "../../assets/mongodb.png";

const Technologies = () => {
    return (
        <>
            <TechnologiesContainer>
                <SectionTitle>TECHNOLOGIES</SectionTitle>
                <SectionLine />
            </TechnologiesContainer>
            <TechnologiesContainer>
                <TechnologiesCard>
                    <Technology>
                        <img src={html5} alt="html"/>
                        <IconText>HTML5</IconText>
                    </Technology>

                    <Technology>
                        <img src={css3} alt="css"/>
                        <IconText>CSS3</IconText>
                    </Technology>

                    <Technology>
                        <img src={javascript} alt="javascript"/>
                        <IconText>JavaScript</IconText>
                    </Technology>

                    <Technology>
                        <img src={bootstrap} alt="bootstrap"/>
                        <IconText>Bootstrap</IconText>
                    </Technology>

                    <Technology>
                        <img src={reactjs} alt="react"/>
                        <IconText>ReactJS</IconText>
                    </Technology>
                </TechnologiesCard>

                <TechnologiesCard>
                    <Technology>
                        <img src={dotnet} alt=".net"/>
                        <IconText>.NET</IconText>
                    </Technology>

                    <Technology>
                        <img src={java} alt="java"/>
                        <IconText>Java</IconText>
                    </Technology>

                    <Technology>
                        <img src={php} alt="php"/>
                        <IconText>PHP</IconText>
                    </Technology>

                    <Technology>
                        <img src={mysql} alt="mysql"/>
                        <IconText>MySQL</IconText>
                    </Technology>

                    <Technology>
                        <img src={mongodb} alt="mongodb"/>
                        <IconText>MongoDB</IconText>
                    </Technology>
                </TechnologiesCard>
            </TechnologiesContainer>
            
        </>
    )
}

export default Technologies
