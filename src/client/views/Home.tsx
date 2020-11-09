import * as React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import AboutComponent from '../components/about/AboutComponent';
import ContactComponent from '../components/contact/ContactComponent';
import HomeComponent from '../components/home/HomeComponent';
import ServicesComponent from '../components/services/ServicesComponent';

const Home: React.FC<IHomeProps> = (props) => {

    return (
        <>
            <div id="home">
                <HomeComponent />
            </div>
            <div id="services">
                <div><ServicesComponent /></div>
            </div>
            <div id="about">
                <div><AboutComponent /></div>
            </div>
            <div id="contact">
                <div><ContactComponent /></div>
            </div>
            <div className="row fixed-bottom">
                <div className="col text-right mb-5 mr-5">
                    <IconContext.Provider value={{ style: { fontSize: '60px' } }}>
                        <a href="#home" className="text-secondary">
                            <FaChevronUp />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}

export interface IHomeProps { }

export default Home;