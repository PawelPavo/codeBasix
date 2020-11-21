import * as React from 'react'
import styled from 'styled-components';
import { IPerson } from '../../utils/interfaces';

const AboutCard: React.FC<AboutCardProps> = (props) => {

    return (
        <Layout>
                <div className="col-sm">
                <div className="card col-md" style={{width: "18rem"}}>
                      
                        <img src={props.person.image} className = "image" />

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
    border: none;
    border-radius: 25px;
    
  }
  
  .image {
    width: 100%;
    object-fit: cover;
    opacity: 1
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
    border-radius: 25px;
       
  }
  

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80%;
    width: 100%;
    opacity: .05;
    transition: .5s ease;
    background-color: #3394FF;
    border-radius: 25px;
  
  }

  
  .card:hover .image {
    opacity: .08;
  }
  
  .card:hover .overlay {
    opacity: 1;
  }
  
  .card-text {
    color: black;
    text-align: justify;
    padding: 15px;
   
  }

`

interface AboutCardProps {
    person: IPerson;
}

export default AboutCard;