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
        description: "Your website needs to be in line with your brand and your business goals. We are passionate about beautiful and effective web design that leaves you wanting more.",
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
        description: "We make web management simple. Whether your business already has a website, or you’re taking your first steps toward doing business online.",
    },
    {
        id: 6,
        name: "Grapihic Design",
        description: "A picture is worth a thousand words. Make sure your customers understand every single one of them.",
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
            <div className="container">
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
                <div className="row justify-content-center my-5">
                    <div className="display-3 font-weight-lighter mobile-text">Our Services</div>
                </div>
                <div className="row justify-content-center">
                    {Services.map(service => (
                        <ServicesCard key={service.name} service={service} />
                    ))}
                </div>
            </div>
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

export interface IServicesComponentProps { }

export default ServicesComponent;