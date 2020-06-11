/**
 *
 * MobileCarousal
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Slider from "react-slick";

const MobileCarousalStyles = styled.div`
  .slick-center {
    
  }
`;

function MobileCarousal(props) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
  };
  return (
    <MobileCarousalStyles>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </MobileCarousalStyles>
  );
}

MobileCarousal.propTypes = {};

export default memo(MobileCarousal);