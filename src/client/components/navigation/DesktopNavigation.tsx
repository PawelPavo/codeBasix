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
                                <a href="#about" className="nav-text left mr-5">
                                    <h4 className="font-weight-lighter mobile-nav-text">About</h4>
                                </a>
                                <a href="#services" className="nav-text left mr-5">
                                    <h4 className="font-weight-lighter mobile-nav-text">Services</h4>
                                </a>
                                <a href="#contact" className="nav-text left">
                                    <h4 className="font-weight-lighter mobile-nav-text">Contact</h4>
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

.nav-text {
    text-decoration: none;
    color: #07407b;
}

.nav-text:hover { 
    color: #f8a320;
}

a.left {
    position: relative !important;
}

a.left:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: red;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
}

a.left:hover:before {
    visibility: visible;
    width: 100%;
}

`

export interface IDesktopNavigationProps { }

export default DesktopNavigation;