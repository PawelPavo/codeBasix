import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu: React.FC<MenuProps> = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <NavLink to="/">
                <div>Home</div>
            </NavLink>
            <NavLink to="/about">
                <div>About</div>
            </NavLink>
            <NavLink to="/services">
                <div>Servies</div>
            </NavLink>
            <NavLink to="/contact">
                <div>Contact</div>
            </NavLink>
        </StyledMenu>
    );
}

interface MenuProps {
    open: boolean;
}

export default Menu;