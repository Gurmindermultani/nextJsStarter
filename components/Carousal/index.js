/**
 *
 * Carousal
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import CenterMode from './CenterMode';
import LeftMode from './LeftMode';
import SingleMode from './SingleMode';
import MobileCarousal from './MobileCarousal';

const CarousalStyles = styled.div`
  .slick-prev, .slick-next {
    width: 48px;
    height: 48px;
  }
  .slick-prev {
    /* left: -45px; */
  }
  .slick-next {
    /* right: -45px; */
  }
`;

const PrevArrowStyles = styled.div`
  background: #0f72ee;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  left: -40px;
`;

const NextArrowStyles = styled.div`
  background: #0f72ee;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: -40px;
  img {
    transform: scale(-1) translate(-2px, 0px);
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NextArrowStyles
      className="nextArrow"
      onClick={onClick}
    >
      <img src="/images/icons/arrow.svg" />
    </NextArrowStyles>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <PrevArrowStyles
      className="prevArrow"
      onClick={onClick}
    >
      <img src="/images/icons/arrow.svg" />
    </PrevArrowStyles>
  );
}

function Carousal(props) {
  return (
    <CarousalStyles className="carousalMainContainer">
      {props.variant === "centerMode" &&
        <CenterMode {...props}/>
      }
      {props.variant === "leftMode" &&
        <LeftMode {...props}/>
      }
      {props.variant === "mobileCarousal" &&
        <MobileCarousal {...props}/>
      }
      {props.variant === "singleMode" &&
        <SingleMode {...props}/>
      }
    </CarousalStyles>
  );
}

Carousal.defaultProps = {
  SampleNextArrow,
  SamplePrevArrow,
}

Carousal.propTypes = {};

export default memo(Carousal);