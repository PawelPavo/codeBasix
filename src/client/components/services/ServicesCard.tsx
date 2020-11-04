import * as React from 'react'
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { BsGraphUp } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaMobileAlt, FaPeopleCarry, FaPalette, FaCode } from 'react-icons/fa';
import { IServices } from '../../utils/interfaces';

const Slide = require('react-reveal/Zoom')

const ServicesCard: React.FC<ServicesCardProps> = (props) => {
    const [show2, setShow2] = React.useState(false);
    return (
        <Layout>
            <Slide left cascade>
                <div
                    onClick={() => setShow2(!show2)}
                    className="col-md-12 border my-3 font-weight-lighter bg-custom-service-card-bg text-light cardHover shadow">
                    <div className="card-body">
                        <div className="row justify-content-between">
                            <div className="col-3 icon">
                                <IconContext.Provider value={{ style: { fontSize: '30px', color: "#f8a320" } }}>
                                    <div>
                                        {props.service.id === 1 ? <FaPalette /> : ''}
                                        {props.service.id === 2 ? <FaPeopleCarry /> : ''}
                                        {props.service.id === 3 ? <FaMobileAlt /> : ''}
                                        {props.service.id === 4 ? <BsGraphUp /> : ''}
                                        {props.service.id === 5 ? <FaCode /> : ''}
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className="col-7">
                                <h5
                                    className="card-title my-auto font-weight-lighter "> {props.service.name}
                                </h5>
                            </div>
                            <h5 >
                                {show2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </h5>

                            <div className={`showContent ${show2 ? 'showContent showContent-active' : ''}`}>
                                <p className="card-text mt-3">{props.service.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </Layout>
    )
}

const Layout = styled.div`
.showContent {
    height: 0px;
    width: 100%;
    display: block;
    opacity: 0;
    transition: height 2s, opacity 2s;
}

.showContent-active {
    height: 200px;
    opacity: 1;
}

.cardHover:hover {
    border-color:rgb(192, 180, 180) !important;
    box-shadow: 0 0 30px rgba(33,33,33,1) !important;
    transition: 0.75s;
}
.icon {
    color: #f8a320;
}

`

interface ServicesCardProps {
    service: IServices;
}

export default ServicesCard;