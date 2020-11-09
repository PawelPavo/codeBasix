import * as React from 'react';
import { StyledBurger } from './Burger.styled';

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
    
    const handleClick = () => {
        setOpen(!open);
    }
    
    return (
        <StyledBurger open={open} onClick={handleClick}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
}

interface BurgerProps {
    open?: boolean;
    setOpen?: any;
}

export default Burger;