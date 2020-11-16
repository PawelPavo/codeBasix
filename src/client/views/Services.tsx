import * as React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import DesktopNavigation from '../components/navigation/DesktopNavigation';
import MobileNavigation from '../components/navigation/MobileNavigation';
import ServicesCard from '../components/services/ServicesCard';

const Slide = require('react-reveal/Zoom')

const Services = [
    {
        id: 1,
        name: "Stunning Design",
        description: "First impressions count. The key to a successful business on the web is outstanding web design. The way for any business to achieve success on the internet is to establish a brand. In order to do this, you must have a great looking, website to grab visitor's attention.",
    },
    {
        id: 2,
        name: "We Work With You",
        description: "We care about our clients! We take the time to show you the ins and outs of your website so you have control over your online business. Of course we are always there to help if you need!",
    },
    {
        id: 3,
        name: "Responsive",
        description: "With over 60% of website traffic coming from mobile devices, having a responsive website is a must! All our websites come mobile-ready to provide the best user experience.",
    },
    {
        id: 4,
        name: "SEO-Friendly",
        description: "SEO (Search Engine Optimization) is an important part of digital marketing! While we provide services to optimize your web marketing, our websites come standard with SEO-friendly coding.",
    },
    {
        id: 5,
        name: "Web Managment",
        description: "We make web management simple. Whether your business already has a website, or you’re taking your first steps toward doing business online, the experienced designers, developers and specialists at at codeBasix can help.",
    },
];

const ServicesComponent: React.FC<IServicesComponentProps> = (props) => {

    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const breakpoint = 576;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <Layout>
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
                    <div className="col-md-12 mt-2">
                        <div className="display-3 font-weight-lighter mobile-text">Web Services</div>
                    </div>
                </div>
                <div className="row d-flex justify-content-end mt-5">
                    <div className="col-md-8">
                        {Services.map(service => (
                            <ServicesCard key={service.name} service={service} />
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

.hero-image-service {
    background-image: url("https://news-api.s3.us-east-2.amazonaws.com/coffee-geek-4A1fKj5RrJA-unsplash.jpg");
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`

export interface IServicesComponentProps { }

export default ServicesComponent;