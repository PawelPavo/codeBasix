import * as React from 'react'
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { FaMobileAlt, FaFacebookF, FaRegEnvelope } from 'react-icons/fa';
import { IServices } from '../../utils/interfaces';


const Slide = require('react-reveal/Zoom')

const AboutCard: React.FC<AboutCardProps> = (props) => {

    const [display, setDisplay] = React.useState(false);
    return (
        <Layout>
            <div
                onClick={() => setDisplay(!display)}
                className="col-md-4">
                <div className="card-body">

                    <img src={props.service.image} width="50%" />


                    <h3 className="card-title"> {props.service.person}</h3>

                    <IconContext.Provider value={{ style: { fontSize: '20px', color: "rgba(25, 76, 130, .75)" } }}>

                        {props.service.id === 1 ? <FaMobileAlt /> : ''}
                        {props.service.id === 1 ? <FaFacebookF /> : ''}
                        {props.service.id === 1 ? <FaRegEnvelope /> : ''}



                        {props.service.id === 2 ? <FaMobileAlt /> : ''}
                        {props.service.id === 2 ? <FaFacebookF /> : ''}
                        {props.service.id === 2 ? <FaRegEnvelope /> : ''}



                        {props.service.id === 3 ? <FaMobileAlt /> : ''}
                        {props.service.id === 3 ? <FaFacebookF /> : ''}
                        {props.service.id === 3 ? <FaRegEnvelope /> : ''}


                    </IconContext.Provider>


                    <div className={`showText ${display ? 'showText showText-active' : ''}`}>

                        <p className="card-text mt-2">{props.service.about}</p>

                    </div>


                </div>
            </div>
        </Layout>
    )
}

const Layout = styled.div`


.showText {
    height: 0px;
    width: 100%;
    display: block;
    opacity: 0;
    transition: background-color 0.5s ease;
    background-color: #f2f3f4;
    text-align: justify;
   
}

.showText-active {
    opacity: .9;
    height: 250px;
    
 
     
}





`

interface AboutCardProps {
    service: IServices;
}

export default AboutCard;