import * as React from 'react';
import AboutCard from '../components/about/AboutCard';
import DesktopNavigation from '../components/navigation/DesktopNavigation';
import MobileNavigation from '../components/navigation/MobileNavigation';
import Slide from 'react-reveal/Zoom';

const Peoples = [
    {
        id: 1,
        name: "Pawel Jaskolski",
        description: "Born in Poland and lived a good portion of his life in New York.  Being a small business owner himself, Pawel has a simplistic yet focused approach: Apply the right technology to drive business revenue while keeping it basic.  He is bluntly honest but wears his heart on his sleeve.  ",
        image: "https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png",
    },
    {
        id: 2,
        name: "Nicole Pasquale",
        description: "Originally from Jersey, Nicole can touch anything and make it beautiful.  She is wickedly smart and has an eye for detail that most choose not to see.  Nicole welcomes all idea by working with businesses to ensure their technology vision is always at the forefront. ",
        image: "https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png",
    },
    {
        id: 3,
        name: "Paula Suarez",
        description: "With strong midwestern working roots, Paula doesn’t give up easily.  Once her mind is set, she will make it happen and nothing will stop her.  Paula has a unique ability to find the business operational gaps easily and quickly then fill those holes with technology that makes sense.",
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
            <div className="container hero-image-service no-gutters">

                <div className="row justify-content-between">
                    <header className="col d-flex justify-content-between">
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


                <div className="col-md-12">
                    <div className="display-3 font-weight-lighter mobile-text">About</div>
                </div>

                <div className="row my-5">

                    {Peoples.map(people => (
                        <AboutCard key={people.name} person={people} />
                    ))}


                </div>
            </div>

        </>
    )
}



export interface IAboutProps { }

export default About;