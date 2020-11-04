import * as React from 'react';
import styled from 'styled-components';

const Slide = require('react-reveal/Slide');

const DesktopNavigation: React.FC<IDesktopNavigationProps> = (props) => {
    return (
        <>
            <Layout>
                <Slide top>
                    <div className="row">
                        <div className="col-md-4 mt-3">
                            <a href="#home">
                                <embed
                                    className="img-fluid mobile-logo"
                                    style={{ height: "auto", width: "225px" }}
                                    type="image/svg+xml"
                                    src="https://news-api.s3.us-east-2.amazonaws.com/codeBasixLogo.svg"
                                />
                            </a>
                        </div>
                        <div className="col-md-8 my-auto">
                            <div className="row justify-content-end">
                                <a href="#about">
                                    <h4 className="font-weight-lighter mx-5 mobile-nav-text">About</h4>
                                </a>
                                <a href="#services">
                                    <h4 className="font-weight-lighter mobile-nav-text">Services</h4>
                                </a>
                                <a href="#contact">
                                    <h4 className="font-weight-lighter ml-5 mobile-nav-text">Contact</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </Slide>
            </Layout>
        </>
    )
}

const Layout = styled.div`
.mobile-nav-text {
    @media not all and (min-width: 576px){
        font-size: 15px;
        margin-top: -100px;
        margin-right: 15px;
    }
} 

.mobile-logo {
    @media not all and (min-width: 768px) {
      display: block;
    }
}
`

export interface IDesktopNavigationProps { }

export default DesktopNavigation;