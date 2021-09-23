import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavLink, HamburgerIcon, NavMenu, NavItem } from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <Nav>
                <HamburgerIcon onClick={handleClick}>
                    {click ? <FaTimes style={{color: "#fff"}} /> : <FaBars style={{color: "#FF647C"}}/>}
                </HamburgerIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem><NavLink href="#home">Home</NavLink></NavItem>
                    <NavItem><NavLink href="#education">Education</NavLink></NavItem>
                    <NavItem><NavLink href="#projects">Projects</NavLink></NavItem>
                    <NavItem><NavLink href="#technologies">Technologies</NavLink></NavItem>
                    <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
