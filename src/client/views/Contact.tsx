import * as React from 'react';
import DesktopNavigation from '../components/navigation/DesktopNavigation';
import MobileNavigation from '../components/navigation/MobileNavigation';

const Slide = require('react-reveal/Slide');

const Contact: React.FC<IContactProps> = (props) => {

    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const breakpoint = 576;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <>
            <main className="container no-gutters">
            <div className="row justify-content-between">
                    <header className="col d-flex justify-content-between align-items-center">
                        <Slide>
                            <a href="/">
                                <img
                                    style={{ height: '97px', width: '157px' }}
                                    src="https://news-api.s3.us-east-2.amazonaws.com/codeBasix-2.png"
                                    className="m-3"
                                />
                            </a>
                        </Slide>
                        {width < breakpoint ? <MobileNavigation /> : <DesktopNavigation />}
                    </header>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="display-3 font-weight-lighter">Contact</div>
                    </div>
                </div>
            </main>
        </>
    )
}

export interface IContactProps { }

export default Contact;