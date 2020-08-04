/**
 *
 * CenterMode
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Slider from "react-slick";

const CenterModeStyles = styled.div`
  .slick-center {
    
  }
`;

function CenterMode(props) {
  const carousalRef = useRef(null);
  const nextArrowClick = () => {
    if (carousalRef.current.querySelector('.nextArrow')) {
      carousalRef.current.querySelector('.nextArrow').click();
    }
  }
  const prevArrowClick = () => {
    if (carousalRef.current.querySelector('.prevArrow')) {
      carousalRef.current.querySelector('.prevArrow').click();
    }
  }
  useEffect(() => {
    if (carousalRef.current) {
      carousalRef.current.querySelectorAll('.slick-slide').forEach( (slide) => {
        slide.addEventListener('click', function(e) {
          if (e.target.closest('.slick-slide') && e.target.closest('.slick-slide').getAttribute('data-index')) {
            const numSlide = parseInt(e.target.closest('.slick-slide').getAttribute('data-index'));
            const centerSlide = parseInt(carousalRef.current.querySelector('.slick-active.slick-center').getAttribute('data-index'));
            if (numSlide > centerSlide) {
              nextArrowClick();
            };
            if (numSlide < centerSlide) {
              prevArrowClick();
            };
          }
        })
      });
    }
  }, []);
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
    <CenterModeStyles ref={carousalRef}>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </CenterModeStyles>
  );
}

CenterMode.propTypes = {};

export default memo(CenterMode);