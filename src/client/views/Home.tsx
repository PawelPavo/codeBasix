import * as React from 'react';
import { FaChevronUp, FaChevronDown, FaChevronCircleDown } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import HomeComponent from '../components/home/HomeComponent';

const Slide = require('react-reveal/Slide');


const Home: React.FC<IHomeProps> = (props) => {

    return (
        <>
            <Layout>
                <div className="hero-image">
                    <div className="min-vh-100 d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <Slide left>
                                    <div className="display-1 font-weight-lighter mobile-text mobile-margin ">Move forward...</div>
                                </Slide>
                                <Slide right>
                                    <div className="display-1 font-weight-lighter mobile-text">Go back to basics!</div>
                                </Slide>
                            </div>
                            <div className="col-md-12 text-center mt-5">
                                <IconContext.Provider value={{ style: { fontSize: '60px' } }}>
                                    <a href="#home" className="text-secondary">
                                        <span className="blink">

                                            <FaChevronCircleDown />
                                        </span>
                                    </a>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <div id="home">
                <HomeComponent />
            </div>
        </>
    )
}

const Layout = styled.div`
.hero-image {
    background-image: url("https://news-api.s3.us-east-2.amazonaws.com/codeBasix-siteBG.jpg");
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    
.mobile-text {
    @media not all and (min-width: 737px) {
      font-size: 30px;
    }
}

span{
    animation: blink 3s linear infinite;
  }
  @keyframes blink{
  0%{opacity: 0.1;}
  25%{opacity: .5;}
  50%{opacity: 1;}
  75%{opacity: .5;}
  100%{opacity: 0.1;}
  }

`

export interface IHomeProps { }

export default Home;