import * as React from 'react';
import styled from 'styled-components';
import DesktopNavigation from '../navigation/DesktopNavigation';

const Slide = require('react-reveal/Slide');

const HomeComponent: React.FC<IHomeComponentProps> = (props) => {

    return (
        <>
            <Layout>
                <div className="hero-image">
                    <div className="container h-100 no-gutters">
                        <DesktopNavigation />
                        <div className="row mt-5">
                            <div className="col-md-10 mt-5">
                                <Slide left>
                                    <div className="display-1 ml-5 font-weight-lighter mobile-text mobile-margin ">Move forward...</div>
                                </Slide>
                                <Slide right>
                                    <div className="display-1 ml-5 font-weight-lighter mobile-text">Go back to basics!</div>
                                </Slide>
                            </div>
                        </div>
                    </div>
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
    @media not all and (min-width: 576px) {
      font-size: 30px;
    }
}

`

export interface IHomeComponentProps { }

export default HomeComponent;