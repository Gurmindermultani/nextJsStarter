/**
 *
 * CenterMode
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Slider from "react-slick";

const CenterModeStyles = styled.div`
  .slick-center {
    
  }
`;

function CenterMode(props) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    adaptiveHeight: true,
    nextArrow: <props.SampleNextArrow />,
    prevArrow: <props.SamplePrevArrow />,
  };
  return (
    <CenterModeStyles>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </CenterModeStyles>
  );
}

CenterMode.propTypes = {};

export default memo(CenterMode);