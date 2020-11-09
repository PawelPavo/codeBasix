import * as React from 'react';
import { Burger, Menu } from '../';
import { useOnClickOutside } from '../../utils/hooks';

const MobileNavigation = () => {
    
    const [open, setOpen] = React.useState<boolean>(false);
    const node = React.useRef();
    
    useOnClickOutside(node, () => setOpen(false));
    
    return (
        <>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} />
            </div>
        </>
    );
}

export default MobileNavigation;