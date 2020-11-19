import * as React from 'react';
import styled from 'styled-components';
import AboutCard from '../components/about/AboutCard';
import DesktopNavigation from '../components/navigation/DesktopNavigation';
import MobileNavigation from '../components/navigation/MobileNavigation';


const Slide = require('react-reveal/Zoom')

const Peoples = [
    {
        id: 1,
        person: "Pawel",
        about: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png",
    },
    {
        id: 2,
        person: "Nicole",
        about: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png",
    },
    {
        id: 3,
        person: "Paula",
        about: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png",
    },
 
];



const About: React.FC<IAboutProps> = (props) => {

    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const breakpoint = 576;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <>
            <Layout>
                <main className="container h-100 no-gutters">
                <div className="row justify-content-between">
                    <header className="col d-flex justify-content-between align-items-center">
                        <Slide >
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
                    <div className="col-md-12 mt-2">
                        <div className="display-3 font-weight-lighter mobile-text">About</div>
                    </div>
                </div>
                <div className="row d-flex justify-content-end mt-5">
                    <div>
                        {Peoples.map(service => (
                            <AboutCard key={service.person} service={service} />
                        ))}
                    </div>
                </div>

                </main>
            </Layout>
        </>
    )
}


const Layout = styled.div`
.header h5{
color: #17a2b8;
font-weight: bold;
margin-top: 5px;
margin-bottom: auto;
 
}
 
`;




export interface IAboutProps { }

export default About;