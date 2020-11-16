import * as React from 'react';
import styled from 'styled-components';
import DesktopNavigation from '../navigation/DesktopNavigation';
import MobileNavigation from '../navigation/MobileNavigation';

const Slide = require('react-reveal/Slide');

const HomeComponent: React.FC<IHomeComponentProps> = (props) => {
    
    const [width, setWidth] = React.useState<number>(window.innerWidth);
	const breakpoint = 576;

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

    return (
        <>
            <Layout>
                <div className="hero-image">
                    <div className="container h-100 no-gutters">
                    <div className="row justify-content-between">
						<header className="col d-flex justify-content-between align-items-center">
							<Slide >
								<a href="/">
									<img
										style={{ height: '97px', width: '157px' }}
										src="https://news-api.s3.us-east-2.amazonaws.com/codeBasix-2.png"
										className="m-3"
									/>
								</a>
							</Slide>
							{width < breakpoint ? <MobileNavigation /> : <DesktopNavigation />}
						</header>
					</div>
                        <div className="row mt-5">
                            <div className="col-md-10 mt-5">
                                <Slide left>
                                    <div className="display-4 ml-5 font-weight-lighter mobile-text mobile-margin">Welcome</div>
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