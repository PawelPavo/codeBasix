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

    return (
        <Layout>
            <main className="container h-100 no-gutters hero-image-service">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <Slide right>
                            <div className="display-3 font-weight-lighter mobile-text">Web Services</div>
                        </Slide>
                    </div>
                </div>
                <Slide left>
                    <div className="row d-flex justify-content-end mt-5">
                        <div className="col-md-8">
                            {Services.map(service => (
                                <ServicesCard key={service.name} service={service} />
                            ))}
                        </div>
                    </div>
                </Slide>
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