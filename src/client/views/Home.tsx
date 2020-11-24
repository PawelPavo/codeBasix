import * as React from 'react';
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
                    <div className="col-md-12 text-style">
                        <div className="display-1 text-style" style={{ fontFamily: "Amatic SC" }}>Move Forward</div>
                        <div className="display-4" style={{ fontFamily: "Amatic SC" }}>Go back to basics...</div>
                    </div>
                    <a href="#home">
                        <div className="mb-5"><Arrow /></div>
                    </a>
                </div>
                <div id="home" className="">
                    <ServicesComponent />
                </div>
            </Layout>
        </>
    )
}

const Layout = styled.div`

.text-style {
    color:#2fb1ff;
    position: relative;
    animation-name: example;
    animation-duration: 10s;
    animation-iteration-count: 1;
  }
  
  @keyframes example {
    0%   {color:#2fb1ff; left:0px; top:0px;}
    25%  {color:#ff5c5c; left:25%; top:0px;}
    50%  {color:#99e265; left:25%; top:50%;}
    75%  {color:#ffbd4a; left:0px; top:25%;}
    100% {color:#2fb1ff; left:0px; top:0px;}
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

`

export interface IHomeProps { }

export default Home;