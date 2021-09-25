import React from "react";
import { MainContainer, TextContainer, SocialIcons, Icon, PreHeader, Header, AboutText, Divider, Twitter, GitHub, LinkedIn, Btn } from "./Main.elements";
import image from "../../assets/portrait.png";

const Main = () => {
    return (
        <>
            <MainContainer id="home">
                <TextContainer>
                    <SocialIcons>
                        <Icon><Twitter /></Icon>
                        <Icon><GitHub /></Icon>
                        <Icon><LinkedIn /></Icon>
                    </SocialIcons>
                    <PreHeader>
                        HELLO, MY NAME IS
                    </PreHeader>
                    <Header>
                        FARIS BEGIĆ
                    </Header>
                    <Divider />
                    <AboutText>
                    A third-year student in the field of Computer Sciences who seeks to be a Full Stack Web Developer. When I finished high school, my passion for Web Development began and brought me to the faculty of Computer Science, where I started my journey.I am an enthusiastic person striving to become an excellent Software Developer. I always work towards improving in all areas and therefore use every opportunity to the greatest extent possible. I love meeting people with the same interest and objectives as mine.
                    </AboutText>
                    <Btn />
                </TextContainer>
                <img src={image} alt="portrait" className="portrait"/>
            </MainContainer>
        </>
    )
}

export default Main;
