/**
 *
 * LeftMode
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Slider from "react-slick";

const LeftModeStyles = styled.div`
  .slick-center {
    
  }
`;

function LeftMode(props) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    nextArrow: <props.SampleNextArrow />,
    prevArrow: <props.SamplePrevArrow />,
  };
  return (
    <LeftModeStyles>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </LeftModeStyles>
  );
}

LeftMode.propTypes = {};

export default memo(LeftMode);