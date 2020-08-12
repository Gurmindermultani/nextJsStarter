/**
 *
 * LeftMode
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Slider from "react-slick";

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
  svg {
    transform: scale(1) translate(-1px, 0px);
  }
  &:hover {
    background: #fff;
    svg path {
      fill: #0f72ee;
    }
  }
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
  svg {
    transform: scale(-1) translate(-1px, 0px);
  }
  &:hover {
    background: #fff;
    svg path {
      fill: #0f72ee;
    }
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NextArrowStyles
      className="nextArrow"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="10.858" height="20.045" viewBox="0 0 10.858 20.045">
        <path id="Path_4537" data-name="Path 4537" d="M19.8.245a.834.834,0,0,0-1.181,0l-8.6,8.6-8.6-8.6A.835.835,0,0,0,.245,1.426l9.187,9.187a.835.835,0,0,0,1.181,0L19.8,1.426A.834.834,0,0,0,19.8.245Z" transform="translate(10.858) rotate(90)" fill="#fff"/>
      </svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" width="10.858" height="20.045" viewBox="0 0 10.858 20.045">
        <path id="Path_4537" data-name="Path 4537" d="M19.8.245a.834.834,0,0,0-1.181,0l-8.6,8.6-8.6-8.6A.835.835,0,0,0,.245,1.426l9.187,9.187a.835.835,0,0,0,1.181,0L19.8,1.426A.834.834,0,0,0,19.8.245Z" transform="translate(10.858) rotate(90)" fill="#fff"/>
      </svg>
    </PrevArrowStyles>
  );
}

const LeftModeStyles = styled.div`
  .slick-slide {
    cursor: pointer;
  }
`;

function LeftMode(props) {
  const carousalRef = useRef(null);
  const sliderRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  },[]);

  useEffect(() => {
    if (carousalRef.current) {
      carousalRef.current.querySelectorAll('.slick-slide').forEach( (slide) => {
        slide.addEventListener('click', function(e) {
          if (e.target.closest('.slick-slide') && e.target.closest('.slick-slide').getAttribute('data-index')) {
            const numSlide = parseInt(e.target.closest('.slick-slide').getAttribute('data-index'));
            if (sliderRef && sliderRef.current) {
              sliderRef.current.slickGoTo(numSlide);
            }
          }
        })
      });
    }
  }, [show]);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    autoplay: props.autoplay ? true : false,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <LeftModeStyles ref={carousalRef}>
      {show && 
        <Slider ref={sliderRef} {...settings}>
          {props.children}
        </Slider>
      }
    </LeftModeStyles>
  );
}

LeftMode.propTypes = {};

export default memo(LeftMode);