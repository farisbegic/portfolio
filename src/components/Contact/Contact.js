import React, { useRef } from "react"
import { ContactContainer, Input, SendButton, Textarea } from "./Contact.elements"
import { SectionTitle, SectionLine, SectionContainer } from "../../globalStyles"
import emailjs from "emailjs-com";
import configData from "../../config.json";

const Contact = () => {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(configData.service_id, configData.template_id, form.current, configData.user_id)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        };

    return (
        <>
            <SectionContainer>
                <SectionTitle>CONTACT</SectionTitle>
                <SectionLine />
            </SectionContainer>

            <ContactContainer>
                <form ref={form} onSubmit={sendEmail}>
                    <Input placeholder="Name" type="text" size="30" name="name" required/>
                    <Input placeholder="Email" type="email" name="email" style ={{margin: "10px 0"}} required/>
                    <Textarea placeholder="Message" name="message" required/>
                    <SendButton type="submit" value="Send">Send</SendButton>
                </form>
            </ContactContainer>
        </>
    )
}

export default Contact
