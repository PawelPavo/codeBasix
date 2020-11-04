import * as React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import ServicesCard from './ServicesCard';

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
        icon: "FaMobileAlt",
        description: "With over 60% of website traffic coming from mobile devices, having a responsive website is a must! All our websites come mobile-ready to provide the best user experience.",
    },
];

const ServicesComponent: React.FC<IServicesComponentProps> = (props) => {

    return (
        <Layout>
            <main className="container h-75">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <Slide right>
                            <div className="display-3 font-weight-lighter mobile-text">Web Services</div>
                        </Slide>
                    </div>
                </div>
                <Slide left>
                    <div className="row mt-5">
                        <div className="col-md-8">
                            {Services.map(service => (
                                <ServicesCard key={service.name} service={service} />
                            ))}
                        </div>
                    </div>
                </Slide>
            </main>
            <div className=" container h-25">
                <div className="row justify-content-end">
                    <IconContext.Provider value={{ style: { fontSize: '60px' } }}>
                        <a href="#home" className="text-secondary">
                            <FaChevronUp />
                        </a>
                        <a href="#about" className="text-secondary">
                            <FaChevronDown />
                        </a>
                    </IconContext.Provider>
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