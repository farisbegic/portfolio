import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    ::selection{
        background-color: #FF647C;
        color: #fff;
    }
 }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 100px auto;
`;

export const Button = styled.button`
    font-family: "Roboto", sans-serif;
    align-items: center;
    color: #FF657C;
    font-size: 16px;
    font-weight: 400;
    transition: all 0.5s ease;
    background-color: #fff;
    border: 1px solid #FF647C;
    border-radius: 5px;
    height: 50px;
    transition: all 0.5s ease;
    filter: drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.08)) drop-shadow(0px 4px 8px rgba(50, 50, 71, 0.06));

    &:hover{
        background: linear-gradient(45deg, rgba(255,100,124,1) 0%, rgba(255,152,168,1) 100%);
        color: #fff;
    }
`;

export const SeparationLine = styled.hr`
    border: 1px solid rgba(228, 228, 228, 1);
`;

export const SectionTitle = styled.h2`
    font-family: "Gilroy-Medium";
    font-size: 28px;
    margin-right: 10px;
`;

export const SectionLine = styled.hr`
    border: 1px solid rgba(228, 228, 228, 1);
    width: 100%;
    height: 1px;
`;

export const Card = styled.div`
    height: 520px;
    width: 325px;
    background-color: #fff;
    box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.2);
    border-radius: 9px;
`;

export const Title = styled.h2`
    font-family: "Gilroy-Medium", sans-serif;
    color: #000;
    text-transform: uppercase;
`;

export const Description = styled.p`
    font-family: "Gilroy-Light";
    color: rgba(0, 0, 0, 0.6);
    font-size: 15px;
`;


export default GlobalStyle;