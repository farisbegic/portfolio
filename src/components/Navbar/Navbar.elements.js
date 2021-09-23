import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 530px;
    margin: 40px auto;
    font-family: "Roboto", sans-serif;
    @media screen and (max-width: 750px){
        margin: auto;
    }
`;

export const HamburgerIcon = styled.div`
    display: none;
    @media screen and (max-width: 750px){
        display: block;
        position: absolute;
        right: 0;
        top: 27px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        z-index: 10;
        margin: 40px auto;

        &::active {
            color: #fff;
        }
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    @media screen and (max-width: 750px){
        overflow: hidden;
        z-index: 9;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: fixed;
        left: ${({click}) => (click ? 0 : '100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #FF647C;
    }
`;

export const NavItem = styled.li`
    font-size: 20px;
    color: #000;
    height: 60px;
    border-bottom: 2px solid transparent;

    @media screen and (max-width: 750px){
        font-size: 25px;
        height: 80px;
        width: 100%;

        &:hover{
            border: none;
        }
    }
`;

export const NavLink = styled.a`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    &:hover {
        color: #FF647C;
    }

    @media screen and (max-width: 750px){
        color: #ffff;
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color: #fff;
            transition: all 0.3s ease;
        }
    }
`