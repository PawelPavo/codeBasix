import * as React from 'react';
import styled from 'styled-components';

const AboutComponent: React.FC<IAboutComponentProps> = (props) => {

    return (
        <>
            <main className="container h-100 no-gutters">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="display-3 font-weight-lighter">Founders</div>
                        <About>
                            <div className="content">
                                <h5>Meet Pawel, Nicole & Paula</h5>

                        
                                <p>We're web developers and business owners.
                We believe business does not have to be complicated or the software we create.</p>
                            </div>
                        </About>
                    </div>
                </div>
            </main>
        </>
    )
}




const About = styled.div`


.content h5{
    font-weight: bold;
    margin-left: 20px;
    font-size: 26px;
  
  }

  .content p{
    margin-top: 30px;
    margin-left: 25px; 
    width: 80%;
    text-align: justify;
    font-size: 18px;
  }

`;


export interface IAboutComponentProps { }

export default AboutComponent;