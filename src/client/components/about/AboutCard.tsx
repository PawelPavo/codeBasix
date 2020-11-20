import * as React from 'react'
import styled from 'styled-components';
import { IPeople } from '../../utils/interfaces';

const AboutCard: React.FC<AboutCardProps> = (props) => {

    const [display, setDisplay] = React.useState(false);
    return (
        <Layout>
        
                <div className="col-md">
                    <div className="card">
                      
                        <img src={props.people.image} className = "image" />

                        <div className="card-body">

                            <h5 className="card-title">{props.people.person}</h5>

                            <div className = "middle">
                            <p className="card-text">{props.people.about}</p>
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
  }
  
  .image {
    opacity: 1;
    display: block;
    width: 50%;
    height: 50%;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  
  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-80%, -80%);
     
  }
  
  .card:hover .image {
    opacity: 0.3;
  }
  
  .card:hover .middle {
    opacity: 1;
  }
  
  .card-text {
    background-color: white;
    color: blue;
   

  }


`

interface AboutCardProps {
    people: IPeople;
}

export default AboutCard;