import React, { useRef, useState } from "react"
import { ContactContainer, Input, SendButton, Textarea } from "./Contact.elements"
import { SectionTitle, SectionLine, SectionContainer } from "../../globalStyles"
import emailjs from "emailjs-com";
import configData from "../../config.json";
import Recaptcha from "react-recaptcha";
import config from "../../config.json";

    const Contact = () => {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(configData.service_id, configData.template_id, form.current, configData.user_id)
            .then((result) => {
                if (result.status === 200){
                    alert("Message has been sent!");
                }
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
    };

    const [verified, setVerify] = useState(false);

        const onloadCallback = () => {
            console.log("Captcha successfully loaded!");
        }
    
        const handleSubscribe = () => {
            if (!verified){
                alert("Please verify that you are a human");
            }
        };

        const verifyCallback = (response) => {
            if (response){
                setVerify(!verified);
            }
        }

    return (
        <>
            <SectionContainer id="contact">
                <SectionTitle>CONTACT</SectionTitle>
                <SectionLine />
            </SectionContainer>

            <ContactContainer>
                <form ref={form} onSubmit={sendEmail}>
                    <Input placeholder="Name" type="text" size="30" name="name" required/>
                    <Input placeholder="Email" type="email" name="email" style ={{margin: "10px 0"}} required/>
                    <Textarea placeholder="Message" name="message" required/>
                    <SendButton type="submit" value="Send" onClick={handleSubscribe}>Send</SendButton>
                    <Recaptcha
                        sitekey={config["site-key"]}
                        render="onload"
                        style= {{transform: "scale(0.77)", transformOrigin: "0 0"}}
                        onloadCallback={onloadCallback}
                        verifyCallback={verifyCallback}
                    />
                </form>
            </ContactContainer>
        </>
    )
}

export default Contact
