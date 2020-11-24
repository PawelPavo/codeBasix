
import * as React from 'react';
import styled from 'styled-components';

const Arrow: React.FC<IArrowProps> = (props) => {

    return (
        <>
            <ArrowStyle>
                <div id="arrowAnim">
                    <div className="arrowSliding">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay1">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay2">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay3">
                        <div className="arrow"></div>
                    </div>
                </div>
            </ArrowStyle>
        </>
    )
}

const ArrowStyle = styled.div`
#arrowAnim {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -10;
  }
  
  .arrow {

    border: 1.5vw solid;
    border-color: black transparent transparent black;
    transform: rotate(-135deg);
  }
  
  .arrowSliding {
    position: absolute;
    -webkit-animation: slide 4s linear infinite; 
            animation: slide 4s linear infinite;
  }
  
  .delay1 {
    -webkit-animation-delay: 1s; 
      animation-delay: 1s;
  }
  .delay2 {
    -webkit-animation-delay: 2s; 
      animation-delay: 2s;
  }
  .delay3 {
    -webkit-animation-delay: 3s; 
      animation-delay: 3s;
  }
  
  @-webkit-keyframes slide {
      0% { opacity:0; transform: translateY(15vw); }  
     20% { opacity:1; transform: translateY(9vw); }   
     80% { opacity:1; transform: translateY(-9vw); }  
    100% { opacity:0; transform: translateY(-15vw); } 
  }
  @keyframes slide {
      0% { opacity:0; transform: translateY(-15vw); }  
     20% { opacity:1; transform: translateY(-9vw); }   
     80% { opacity:1; transform: translateY(5vw); }  
    100% { opacity:0; transform: translateY(5vw); } 
  }
`

export interface IArrowProps { }
export default Arrow;