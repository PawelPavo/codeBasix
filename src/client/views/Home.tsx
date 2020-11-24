import * as React from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import ServicesComponent from './Services';
import GoogleFontLoader from 'react-google-font-loader';
import Arrow from '../components/arrow/Arrow';


const Home: React.FC<IHomeProps> = (props) => {

    return (
        <>
            <Layout>
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Amatic SC',
                            weights: [400, '400i'],
                        },
                    ]}
                    subsets={['cyrillic-ext', 'greek']}
                />
                <div className="hero-image">
                    <div className="parent">
                        <div className="col-md-12 text-center">
                            <IconContext.Provider value={{ style: { fontSize: '60px' } }}>
                                <a href="#home" className="text-secondary">
                                    <span className="blink">
                                        {/* <FaChevronCircleDown /> */}
                                        <div className="display-2 font-weight-lighter"><Arrow /></div>

                                    </span>
                                </a>
                            </IconContext.Provider>
                        </div>
                        <div className="absolute">
                            <div className="col-md-12">
                                <div className="display-1" style={{ fontFamily: "Amatic SC" }}>Move Forward</div>
                                <div className="display-4" style={{ fontFamily: "Amatic SC" }}>Go back to basics...</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="home" className="">
                    <ServicesComponent />
                </div>
            </Layout>
        </>
    )
}

const Layout = styled.div`

div.parent {
    position: relative;
    height: 100%;
    padding-top: 10%;
  }
  
  div.absolute {
    position: absolute;
    bottom: 10px;
    padding-bottom: 10%;
  } 

.hero-image {
    background-image: url("https://news-api.s3.us-east-2.amazonaws.com/codeBasix-siteBG.jpg");
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
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