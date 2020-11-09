import * as React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu: React.FC<MenuProps> = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </StyledMenu>
    );
}

interface MenuProps {
    open: boolean;
}

export default Menu;