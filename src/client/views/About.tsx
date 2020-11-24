import * as React from 'react';
import styled from 'styled-components';
import DesktopNavigation from '../components/navigation/DesktopNavigation';
import MobileNavigation from '../components/navigation/MobileNavigation';

const Peoples = [
    {
        id: 1,
        name: "Pawel Jaskolski",
        description: "Being a small business owner himself, Pawel has a simplistic yet focused approach: Apply the right technology to drive business revenue while keeping it basic.  He is bluntly honest but wears his heart on his sleeve.  ",
        image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
        id: 2,
        name: "Nicole Pasquale",
        description: "She is wickedly smart and has an eye for detail that most choose not to see.  Nicole welcomes all idea by working with businesses to ensure their technology vision is always at the forefront. ",
        image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    {
        id: 3,
        name: "Paula Suarez",
        description: "Once her mind is set, she will make it happen and nothing will stop her.  Paula has a unique ability to find the business operational gaps easily and quickly then fill those holes with technology that makes sense.",
        image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },

];

console.log(Peoples[1].name)
const About: React.FC<IAboutProps> = (props) => {
    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const breakpoint = 576;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <Layout>
            <main className="container h-100">
                <div className="row justify-content-between">
                    <header className="col d-flex justify-content-between align-items-center">
                        <a href="/">
                            <img
                                style={{ height: '97px', width: '157px' }}
                                src="https://news-api.s3.us-east-2.amazonaws.com/codeBasix-2.png"
                                className="m-3"
                            />
                        </a>
                        {width < breakpoint ? <MobileNavigation /> : <DesktopNavigation />}
                    </header>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="display-3 font-weight-lighter mobile-text">Meet Our Team</div>
                </div>
                <div className="team-boxed">
                    <div className="container">
                        <div className="intro">
                            <p className="text-center font-italic">“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”</p>
                            <p className="text-center"> – Martin Fowler</p>
                        </div>
                        <div className="row people">
                            <div className="col-md-6 col-lg-4 item">
                                <div className="box item"><img className="rounded-circle" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                                    <h3 className="name">{Peoples[0].name}</h3>
                                    <p className="title">Fullstack Developer</p>
                                    <p className="description">{Peoples[0].description} </p>
                                    <div className="social"><a href="#"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 item">
                                <div className="box"><img className="rounded-circle" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                                    <h3 className="name">{Peoples[1].name}</h3>
                                    <p className="title">Fullstack Developer</p>
                                    <p className="description">{Peoples[1].description} </p>
                                    <div className="social"><a href="#"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 item">
                                <div className="box"><img className="rounded-circle" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                                    <h3 className="name">{Peoples[2].name}</h3>
                                    <p className="title">Fullstack Developer</p>
                                    <p className="description">{Peoples[2].description} </p>
                                    <div className="social"><a href="#"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </Layout >
    )
}

const Layout = styled.div`
.mobile-text {
    @media not all and (min-width: 768px) {
      font-size: 50px;
    }
}

.team-boxed {
    color:#313437;
  }
  
  .team-boxed p {
    color:#7d8285;
  }
  
  .team-boxed h2 {
    font-weight:bold;
    margin-bottom:40px;
    padding-top:40px;
    color:inherit;
  }
  
  @media (max-width:767px) {
    .team-boxed h2 {
      margin-bottom:25px;
      padding-top:25px;
      font-size:24px;
    }
  }
  
  .team-boxed .intro {
    font-size:16px;
    max-width:500px;
    margin:0 auto;
  }
  
  .team-boxed .intro p {
    margin-bottom:0;
  }
  
  .team-boxed .people {
    padding:50px 0;
  }
  
  .team-boxed .item {
    text-align:center;
  }
  
  .team-boxed .item .box {
    min-height: 500px;
    text-align:center;
    padding:30px;
    background-color:#fff;
    margin-bottom:30px;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;  }
  
  .team-boxed .item .name {
    font-weight:bold;
    margin-top:28px;
    margin-bottom:8px;
    color:inherit;
  }
  
  .team-boxed .item .title {
    text-transform:uppercase;
    font-weight:bold;
    color:#d0d0d0;
    letter-spacing:2px;
    font-size:13px;
  }
  
  .team-boxed .item .description {
    font-size:15px;
    margin-top:15px;
    margin-bottom:20px;
  }
  
  .team-boxed .item img {
    max-width:160px;
  }
  
  .team-boxed .social {
    font-size:18px;
    color:#a2a8ae;
  }
  
  .team-boxed .social a {
    color:inherit;
    margin:0 10px;
    display:inline-block;
    opacity:0.7;
  }
  
  .team-boxed .social a:hover {
    opacity:0.8;
  }
  
  .team-boxed .item .box:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    opacity: 1;
    background-color: rgba(255, 255, 255, 1);
  }

`


export interface IAboutProps { }

export default About;