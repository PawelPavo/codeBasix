import * as React from 'react'
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { BsGraphUp } from 'react-icons/bs';
import { FaMobileAlt, FaPeopleCarry, FaPalette, FaCode, FaPlus, FaPaintBrush } from 'react-icons/fa';
import { IServices } from '../../utils/interfaces';


const ServicesCard: React.FC<ServicesCardProps> = (props) => {
    return (
        <Layout2>
            <div className="col-md-4 my-5 my-auto">
                <div className="card border-0 mb-5" style={{ width: "21rem", height:"17rem" }}>
                    <div className="card-body">
                        <div className="card-title text-center">
                            <IconContext.Provider value={{ style: { fontSize: '45px', color: "#ffbd4a", opacity: "0.75" } }}>
                                <div>
                                    {props.service.id === 1 ? <FaPalette /> : ''}
                                    {props.service.id === 2 ? <FaPeopleCarry /> : ''}
                                    {props.service.id === 3 ? <FaMobileAlt /> : ''}
                                    {props.service.id === 4 ? <BsGraphUp /> : ''}
                                    {props.service.id === 5 ? <FaCode /> : ''}
                                    {props.service.id === 6 ? <FaPaintBrush /> : ''}
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="card-title text-center name-text">{props.service.name}</div>
                        <p className="card-text text-center text-muted mb-3">{props.service.description}</p>
                    </div>
                    <div className="text-center card-footer bg-white border-0">
                        <a href="#" className="card-link text-center font-weight-light"><small>Read More...</small></a>
                    </div>
                </div>
            </div>
        </Layout2>
    )
}

const Layout2 = styled.div`

.name-text {
    letter-spacing: 2px;
    font-szie: 18px;
    font-weight: bold;
    text-transform: uppercase;
    
}


`

interface ServicesCardProps {
    service: IServices;
}

export default ServicesCard;