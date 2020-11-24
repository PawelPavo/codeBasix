
import * as React from 'react';
import styled from 'styled-components';

const Arrow: React.FC<IArrowProps> = (props) => {

  return (
    <>
      <Arrow_2>
        <div className="wrap">
          <img src="http://image.flaticon.com/icons/svg/3/3907.svg" id="arrow" className="animated bounce" />
        </div>
      </Arrow_2>
    </>
  )
}

const Arrow_2 = styled.div`

.wrap {
  height: 100%;
  width: 100%;
  text-align: center;
}

img {
  height: 50px;
  width: auto;
}

.wrap img {
  margin: 0px 0 0 -40px;
  line-height: 60px;
  position: absolute;
  left: 50%;
  bottom: 100px;
}

.bounce {
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
  animation: bounce 3.6s ease infinite;
  transform-origin: 50% 50%;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  5.55556% {
    transform: translateY(0);
  }
  11.11111% {
    transform: translateY(0);
  }
  22.22222% {
    transform: translateY(-15px);
  }
  27.77778% {
    transform: translateY(0);
  }
  33.33333% {
    transform: translateY(-15px);
  }
  44.44444% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

`

export interface IArrowProps { }
export default Arrow;