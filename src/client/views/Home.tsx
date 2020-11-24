import * as React from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import ServicesComponent from './Services';

const Home: React.FC<IHomeProps> = (props) => {

    return (
        <>
            <Layout>
                <div className="hero-image">
                    <div className="min-vh-100 d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <div className="display-1 font-weight-lighter mobile-text mobile-margin ">Move forward...</div>
                                <div className="display-1 font-weight-lighter mobile-text">Go back to basics!</div>
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
                <div id="home" className="back-image">
                    <ServicesComponent />
                </div>
            </Layout>
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

.back-image {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}

`

export interface IHomeProps { }

export default Home;