import * as React from 'react';
import styled from 'styled-components';
import Rotate from 'react-rotating-text';


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

                        <Name>
                            <div className="about-name">Pawel Jaskolski</div>
                        </Name>



                        <ImgContainer>

                            <div className="wrapper">

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuZGzBEJQnI8aAoFNVRmOp5fSOuViL9fxu3Q&usqp=CAU" />
                            </div>
                        </ImgContainer>

                        <Pawel>
                            <Rotate items={['is razor sharp.', 'is cautiously optimistic.', 'cannot lie to save his life.', 'is beyond loyal.', 'specifically honest.']} />
                        </Pawel>


                        <Name>
                            <div className="about-name">Nicole Pasquale</div>
                        </Name>


                        <ImgContainer>

                            <div className="wrapper">

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuZGzBEJQnI8aAoFNVRmOp5fSOuViL9fxu3Q&usqp=CAU" />
                            </div>

                        </ImgContainer>


                        <Nicole>
                            <Rotate items={['is wicked smart.', 'is steady eddie.', 'is a giver.', 'is heart of gold.', 'is creative genius.']} />
                        </Nicole>

                        <Name>
                            <div className="about-name">Paula Suarez</div>
                        </Name>

                        <ImgContainer>

                            <div className="wrapper">

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuZGzBEJQnI8aAoFNVRmOp5fSOuViL9fxu3Q&usqp=CAU" />
                            </div>

                        </ImgContainer>

                        <Paula>
                            <Rotate items={['is a life-long learner.', 'is passionately crazy.', 'is driven intensely.', 'is fearless.', 'is beyond relentless.']} />
                        </Paula>


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

const Name = styled.div`
.about-name{
    margin-top: 40px;
    font-size: 24px;
    margin-left: 20px;
     
  }
  `;

const ImgContainer = styled.div`
.wrapper img{
    margin-top: 30px;
    display: block;
    margin-left: 90px;
    margin-right: auto;
    width: 40%;
  }
  `;


const Pawel = styled.div`
color: orange;
font-weight: bold;
text-align: center;
margin-right: 4rem;
margin-bottom: 1rem;
`;


const Nicole = styled.div`
color: #10A5F5;
font-weight: bold;
text-align: center;
margin-right: 4rem;
margin-bottom: 1rem;
`;

const Paula = styled.div`
color: #ef00a0;
font-weight: bold;
text-align: center;
margin-right: 4rem;
margin-bottom: 1rem;
`;

export interface IAboutComponentProps { }

export default AboutComponent;