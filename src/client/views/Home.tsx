import * as React from 'react';
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
        </>
    )
}



export interface IHomeProps { }

export default Home;