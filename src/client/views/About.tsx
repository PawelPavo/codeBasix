import * as React from 'react';
import AboutCard from '../components/about/AboutCard';
import DesktopNavigation from '../components/navigation/DesktopNavigation';
import MobileNavigation from '../components/navigation/MobileNavigation';
import Slide from 'react-reveal/Zoom';

const Peoples = [
    {
        id: 1,
        person: "Pawel",
        about: "Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.",
        image: "https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png",
    },
    {
        id: 2,
        person: "Nicole",
        about: "Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.",
        image: "https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png",
    },
    {
        id: 3,
        person: "Paula",
        about: "Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.",
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
            <main className="container hero-image-service no-gutters">
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
                    <div className="col-md-12 mt-2 my-1">
                        <div className="display-3 font-weight-lighter mobile-text">About</div>
                    </div>
                </div>

                <div className="container my-4">
                    <div className="row">

                        {Peoples.map(people => (
                            <AboutCard key={people.person} people={people} />
                        ))}


                    </div>
                </div>

            </main>


        </>
    )
}




export interface IAboutProps { }

export default About;