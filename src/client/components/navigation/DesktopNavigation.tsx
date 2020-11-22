import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Slide = require('react-reveal/Slide');

const DesktopNavigation: React.FC<IDesktopNavigationProps> = (props) => {
    return (
        <>
            <Layout>
                <Slide top>
                    <div className="row justify-content-between mt-5">
                        <NavLink to="/about">
                            <div className="nav-text left mr-5">
                                <h4 className="font-weight-lighter mobile-nav-text">About</h4>
                            </div>
                        </NavLink>
                        <NavLink to="/services">
                            <div className="nav-text left mr-5">
                                <h4 className="font-weight-lighter mobile-nav-text">Services</h4>
                            </div>
                        </NavLink>
                        <NavLink to="/contact">
                            <div className="nav-text left">
                                <h4 className="font-weight-lighter mobile-nav-text">Contact</h4>
                            </div>
                        </NavLink>
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
  background-color: #ff5c5c;
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