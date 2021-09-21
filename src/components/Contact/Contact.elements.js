import styled from "styled-components";
import { Container, Button } from "../../globalStyles";

export const ContactContainer = styled(Container)`
    ${Container};
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    font-family: "Roboto", sans-serif;
    background-color: #fff;
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 5px;
    width: 100%;
    height: 50px;
    padding: 15px;

    &:focus{
        outline: none;
    }

    &::placeholder{
        color: rgba(0, 0, 0, 0.6);
    }
`;

export const Textarea = styled.textarea`
    font-family: "Roboto", sans-serif;
    background-color: #fff;
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 5px;
    width: 100%;
    height: 150px;
    padding: 15px;
    resize: none;

    &:focus{
        outline: none;
    }

    &::placeholder{
        color: rgba(0, 0, 0, 0.6);
    }
`;

export const SendButton = styled(Button)`
    ${Button};
    margin: 15px 0;
    width: 100%;
    height: 50px;
`;
