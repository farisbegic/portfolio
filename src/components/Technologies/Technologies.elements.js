import styled from "styled-components";
import { Card, Container } from "../../globalStyles";

export const TechnologiesContainer = styled(Container)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const TechnologiesCard = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
`;

export const Technology = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconText = styled.h3`
    font-family: "Gilroy-Light";
    font-size: 28px;
    color: #000;
    padding: 0 30px;
`;