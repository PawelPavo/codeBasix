import * as React from 'react'
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaMobileAlt, FaPeopleCarry, FaPalette } from 'react-icons/fa';
import { IServices } from '../../utils/interfaces';


const Slide = require('react-reveal/Zoom')

const ServicesCard: React.FC<ServicesCardProps> = (props) => {
    const [show2, setShow2] = React.useState(false);
    return (
        <Layout>
            <div
                onClick={() => setShow2(!show2)}
                className="col-md-12 border my-2 font-weight-lighter bg-primary text-light">
                <div className="card-body">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <IconContext.Provider value={{ style: { fontSize: '30px', color: "white" } }}>
                                <div>
                                    {props.service.id === 1 ? <FaPalette /> : ''}
                                    {props.service.id === 2 ? <FaPeopleCarry /> : ''}
                                    {props.service.id === 3 ? <FaMobileAlt /> : ''}
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="col-7">
                            <h5
                                className="card-title my-auto font-weight-lighter "> {props.service.name}
                            </h5>
                        </div>
                        <h5>
                            {show2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </h5>

                        <div className={`showContent ${show2 ? 'showContent showContent-active' : ''}`}>
                            <p className="card-text mt-2">{props.service.description}</p>
                        </div>
                    </div>
                </div>
            </div>
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

`

interface ServicesCardProps {
    service: IServices;
}

export default ServicesCard;