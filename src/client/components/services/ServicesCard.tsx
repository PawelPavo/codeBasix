import * as React from 'react'
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Slide = require('react-reveal/Zoom')

const ServicesCard: React.FC<ServicesCardProps> = (props) => {
    const [show2, setShow2] = React.useState(false);
    return (
        <Layout>
            <div
                onClick={() => setShow2(!show2)}
                className="col-md-12 border my-2 borderHover font-weight-lighter bg-primary text-light">
                <div className="card-body">
                    <div className="row justify-content-between">
                        <h5
                            className="card-title my-auto font-weight-lighter ">{props.service.name}
                        </h5>
                        <h5>
                            {show2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </h5>
                    </div>
                    <div className={`showContent ${show2 ? 'showContent showContent-active' : ''}`}>
                        <p className="card-text mt-2">{props.service.description}</p>
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

.borderHover:hover {
    border-color:rgb(192, 180, 180) !important;
    box-shadow: 0 0 15px rgba(33,33,33,.2);
    transition: 0.5s;
}

`

interface ServicesCardProps {
    service: any;
}

export default ServicesCard;