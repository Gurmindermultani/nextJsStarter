/**
 *
 * SingleMode
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Slider from "react-slick";

const SingleModeStyles = styled.div`
  .nextArrow {
    top: 47%;
  }
  .prevArrow {
    bottom: 47%;
  }
`;

function SingleMode(props) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <props.SampleNextArrow />,
    prevArrow: <props.SamplePrevArrow />,
  };
  return (
    <SingleModeStyles>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </SingleModeStyles>
  );
}

SingleMode.propTypes = {};

export default memo(SingleMode);