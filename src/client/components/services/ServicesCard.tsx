import * as React from 'react'
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { CgArrowLongRight, CgMore } from 'react-icons/cg'
import { BsGraphUp } from 'react-icons/bs';
import { FaMobileAlt, FaPeopleCarry, FaPalette, FaCode, FaPlus, FaPaintBrush } from 'react-icons/fa';
import { IServices } from '../../utils/interfaces';


const ServicesCard: React.FC<ServicesCardProps> = (props) => {
    return (
        <Layout2>
            <div className="col-md-4 my-5 my-auto">
                <div className="card border mb-5 card-hover bg-white rouded-0"
                    style={{ width: "21rem", height: "17rem", borderTopLeftRadius: "25px", borderBottomRightRadius: "25px", borderTopRightRadius: "0", borderBottomLeftRadius: "0" }}>
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
                    <div className="text-center bg-primary border-0" style={{ position: "relative" }}>
                        <a
                            href="#"
                            className="card-link text-center font-weight-light border px-3 py-2 border-bottom-0 border-right-0 bg-secondary"
                            style={{ position: "absolute", bottom: "0", right: "0",borderBottomRightRadius : "23px" }}>
                            <IconContext.Provider value={{ style: { fontSize: '20px', color: "white", opacity: "1" } }}>
                                <small className=""><CgArrowLongRight /></small>
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>
        </Layout2>
    )
}

const Layout2 = styled.div`
.card-hover {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}


.name-text {
    letter-spacing: 2px;
    font-szie: 18px;
    font-weight: bold;
    text-transform: uppercase;
    
}

.card-hover:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
.card-hover:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    opacity: 1;
  }

`

interface ServicesCardProps {
    service: IServices;
}

export default ServicesCard;