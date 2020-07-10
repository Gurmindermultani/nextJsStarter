/**
 *
 * DeskTop
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography';
import Carousal from '../Carousal';
import LottieAnimation from "../../components/LottieAnimation";
import FadeIn from "../../components/VisibilitySensor/FadeIn";

const DeskTopStyles = styled.div`
  display: flex;
  .leftContainer {
    flex-basis: 40%;
    background: ${props => props.theme.palette.white};
    position: relative;
    .quote {
      width: 210px;
      position: absolute;
      top: 120px;
      right: 240px;
      .heading2 {
        margin: 4px 0 0px 0;
      }
      .heading3 {
        margin: 4px 0 16px 0;
      }
      span {
        padding: 0 8px;
      }
    }
    .mobileImage {
      position: relative;
      overflow: hidden;
      position: absolute;
      top: 60px;
      right: -442px;
      .mobileRim {
        width: 720px;
        height: 440px;
        z-index: 2;
        position: relative;
      }
      .animation {
        position: absolute;
        top: 33px;
        left: 90px;
        z-index: 1;
        width: 75%;
      }
    }
  }
  .rightContainer {
    flex-basis: 60%;
    background: ${props => props.theme.palette.white};
    padding: 200px 0 0 430px;
    overflow: hidden;
    .carousalMainContainer {
      width: 500px;
      height: 200px;
      .prevArrow {
        left: 0;
        top: -85px;
        background: ${props => props.theme.palette.primary.dark};
      }
      .nextArrow {
        left: 60px;
        top: -85px;
        background: ${props => props.theme.palette.primary.dark};
      }
      .slick-slide {
        width: 260px;
        span {
          color: #212121;
          opacity: 0.5;
        }
        .subHeading {
          margin-top: 18px;
          width: 210px;
        }
        &.slick-active {
          span {
            color: #212121;
            opacity: 1;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    
  }
`;

function DeskTop(props) {
  return (
    <DeskTopStyles>
      <div className="leftContainer">
        <div className="quote">
          <Typography className="highlight" variant="h3" fontSizes={[20, 24, 24]} text={props.quote.heading1}/>
          <br />
          <Typography className="highlight heading2" variant="h3" fontSizes={[20, 24, 24]} text={props.quote.heading2}/>
          <br />
          <Typography className="highlight heading3" variant="h3" fontSizes={[20, 24, 24]} text={props.quote.heading3}/>
          <br />
          <Typography className="" fontWeight="400" color="#212121" fontSizes={[18, 18, 18]} variant="h2" text={props.quote.text}/>
        </div>
        <div className="mobileImage">
          <img className="mobileRim" alt="Mobile View" src="/images/mac.png"/>
          <LottieAnimation dataUrl={props.phoneJson} />
        </div>
      </div>
      <div className="rightContainer">
        <div>
          <Carousal variant="leftMode">
            {props.slides.map( slide => 
              <div className="" key={slide.heading}>
                <Typography variant="h6" color="#212121" fontSizes={[18, 18, 18]} text={slide.heading} />
                <br />
                <Typography className="subHeading" variant="h2" fontWeight="400" color="#212121" fontSizes={[16, 16, 16]} text={slide.text} />
              </div>
            )}
          </Carousal>
        </div>
      </div>
    </DeskTopStyles>
  );
}

DeskTop.propTypes = {};

export default memo(DeskTop);