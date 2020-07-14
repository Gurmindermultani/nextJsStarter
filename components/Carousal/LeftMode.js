/**
 *
 * LeftMode
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Slider from "react-slick";

const LeftModeStyles = styled.div`
  .slick-center {
    
  }
`;

function LeftMode(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  },[]);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    autoplay: props.autoplay ? true : false,
    autoplaySpeed: 4000,
    nextArrow: <props.SampleNextArrow />,
    prevArrow: <props.SamplePrevArrow />,
  };
  return (
    <LeftModeStyles>
      {show && 
        <Slider {...settings}>
          {props.children}
        </Slider>
      }
    </LeftModeStyles>
  );
}

LeftMode.propTypes = {};

export default memo(LeftMode);