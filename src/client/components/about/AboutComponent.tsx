import * as React from 'react';
import styled from 'styled-components';
import Rotate from 'react-rotating-text';


const AboutComponent: React.FC<IAboutComponentProps> = (props) => {

    return (
        <>
            <Layout>
                <main className="container h-100 no-gutters">
                <div className="row">
                        <div className="col-md-12 mt-5">
                            <div className="display-3 font-weight-lighter">Founders</div>
                          
                            <div className="header">
                                <h5>Meet Pawel, Nicole & Paula</h5>
                                <span>Web Developers | Business Owners</span> 
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-xs-4 thumb text-center">
                                    <a className="thumbnail" href="https://damp-headland-11870.herokuapp.com/">
                                        <img className="img-responsive" src="https://cdn1.vectorstock.com/i/thumb-large/63/85/black-smiley-flat-silhouette-white-background-vector-26856385.jpg" alt="pawel" width="40%" />
                                    </a>
                                    <Pawel>
                                        <Rotate items={['Pawel is razor sharp.', 'He can be optimistic.', 'He is a bad liar.', 'He is way loyal.', 'He is just honest.']} />
                                    </Pawel>
                                </div>
                               

                                <div className="col-lg-4 col-md-4 col-xs-4 thumb text-center">
                                    <a className="thumbnail" href="#">
                                        <img className="img-responsive" src="https://cdn1.vectorstock.com/i/thumb-large/63/85/black-smiley-flat-silhouette-white-background-vector-26856385.jpg" alt="nicole" width="40%" />
                                    </a>
                                    <Nicole>
                                        <Rotate items={['Nicole is wicked smart.', 'She is steady eddie.', 'Nicole is a giver.', 'She is heart of gold.', 'She is creative genius.']} />
                                    </Nicole>
                                </div>


                                <div className="col-lg-4 col-md-4 col-xs-4 thumb text-center">
                                    <a className="thumbnail" href="#">
                                        <img className="img-responsive" src="https://cdn1.vectorstock.com/i/thumb-large/63/85/black-smiley-flat-silhouette-white-background-vector-26856385.jpg" alt="paula" width="40%" />
                                    </a>
                                    <Paula>
                                        <Rotate items={['Paula is a learner.', 'She is kind of crazy.', 'She is driven.', 'She is fearless.', 'She is relentless.']} />
                                    </Paula>
                                </div>


                            </div>

                        </div>
                        </div>
                


             



                </main>
            </Layout>
        </>
    )
}


const Layout = styled.div`
.header h5{
color: #17a2b8;
font-weight: bold;
margin-top: 5px;
margin-bottom: auto;
 
}

 


 
`;

const Pawel = styled.div`
color: orange;
font-weight: bold;
 
`;

const Nicole = styled.div`
color: #28a745;
font-weight: bold;
 
 
`;

const Paula = styled.div`
color: #ef00a0;
font-weight: bold;
 
 
`;

export interface IAboutComponentProps { }

export default AboutComponent;