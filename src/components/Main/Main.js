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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </AboutText>
                    <Btn />
                </TextContainer>
                <img src={image} alt="portrait" className="portrait"/>
            </MainContainer>
        </>
    )
}

export default Main;
