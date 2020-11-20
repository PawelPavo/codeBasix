import * as React from 'react'
import styled from 'styled-components';
import { IPerson } from '../../utils/interfaces';
import Slide from 'react-reveal/Zoom';


const AboutCard: React.FC<AboutCardProps> = (props) => {

    return (
        <Layout>
        
                <div className="col-md">
                    <div className="card">
                      
                        <img src={props.person.image} className = "image" item-align = "center"/>

                        <div className="card-body">

                            <h5 className="card-title">{props.person.name}</h5>

                            <div className = "overlay">
                            <p className="card-text">{props.person.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
          
        </Layout>
    )
}

const Layout = styled.div`

.card {
    position: relative;
    width: 80%;
    border: none;
     
  }
  
  .image {
    opacity: 1;
    display: block;
    width: 50%;
    height: 50%;
    transition: .5s ease;
    backface-visibility: hidden;
     
  }
  

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 95%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #3394FF;
  
  }

  
  .card:hover .image {
    opacity: .08;
  }
  
  .card:hover .overlay {
    opacity: 1;
  }
  
  .card-text {
    color: white;
    text-align: justify;
    padding: 10px;
   
  }


`

interface AboutCardProps {
    person: IPerson;
}

export default AboutCard;