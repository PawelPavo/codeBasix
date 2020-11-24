import * as React from 'react';
import styled from 'styled-components';
import AboutCard from '../components/about/AboutCard';
import DesktopNavigation from '../components/navigation/DesktopNavigation';
import MobileNavigation from '../components/navigation/MobileNavigation';

const Peoples = [
    {
        id: 1,
        name: "Pawel Jaskolski",
        description: "Born in Poland and lived a good portion of his life in New York.  Being a small business owner himself, Pawel has a simplistic yet focused approach: Apply the right technology to drive business revenue while keeping it basic.  He is bluntly honest but wears his heart on his sleeve.  ",
        image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
        id: 2,
        name: "Nicole Pasquale",
        description: "Originally from Jersey, Nicole can touch anything and make it beautiful.  She is wickedly smart and has an eye for detail that most choose not to see.  Nicole welcomes all idea by working with businesses to ensure their technology vision is always at the forefront. ",
        image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
        id: 3,
        name: "Paula Suarez",
        description: "With strong midwestern working roots, Paula doesn’t give up easily.  Once her mind is set, she will make it happen and nothing will stop her.  Paula has a unique ability to find the business operational gaps easily and quickly then fill those holes with technology that makes sense.",
        image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
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
        <Layout>
            <main className="container h-100">
                <div className="row justify-content-between">
                    <header className="col d-flex justify-content-between align-items-center">
                        <a href="/">
                            <img
                                style={{ height: '97px', width: '157px' }}
                                src="https://news-api.s3.us-east-2.amazonaws.com/codeBasix-2.png"
                                className="m-3"
                            />
                        </a>
                        {width < breakpoint ? <MobileNavigation /> : <DesktopNavigation />}
                    </header>
                </div>
                <div className="row justify-content-center my-5">
                    <div className="display-3 font-weight-lighter mobile-text">Meet Our Team</div>
                </div>
                <div className="container my-5">
                    <div className="row d-flex justify-content-center text-center">
                        {Peoples.map(people => (
                            <AboutCard key={people.name} person={people} />
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

const Layout = styled.div`
.mobile-text {
    @media not all and (min-width: 768px) {
      font-size: 50px;
    }
}

`


export interface IAboutProps { }

export default About;