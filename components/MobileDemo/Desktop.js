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
    background: ${props => props.theme.palette.primary.main};
    position: relative;
    .quote {
      width: 210px;
      position: absolute;
      top: 120px;
      right: 160px;
      .heading2 {
        margin: 4px 0 16px 0;
      }
      span {
        color: white;
        padding: 0 8px;
      }
    }
    .mobileImage {
      position: relative;
      overflow: hidden;
      position: absolute;
      top: 60px;
      right: -112px;
      .mobileRim {
        width: 220px;
        height: 440px;
        z-index: 2;
        position: relative;
      }
      .animation {
        position: absolute;
        top: 12px;
        left: 14px;
        z-index: 1;
        width: 193px;
        img {
          width: 100%;
        }
      }
    }
  }
  .rightContainer {
    flex-basis: 60%;
    background: ${props => props.theme.palette.primary.dark};
    padding: 200px 0 0 180px;
    overflow: hidden;
    .carousalMainContainer {
      width: 1000px;
      height: 200px;
      .prevArrow {
        left: 0;
        top: -85px;
      }
      .nextArrow {
        left: 60px;
        top: -85px;
      }
      .slick-slide {
        width: 260px;
        span {
          color: #C5D0E6;
        }
        .subHeading {
          margin-top: 18px;
          width: 180px;
        }
        &.slick-active {
          span {
            color: #fff;
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
          <Typography className="invertedHighlight" variant="h3" fontSizes={[20, 24, 24]} text={props.quote.heading1}/>
          <br />
          <Typography className="invertedHighlight heading2" variant="h3" fontSizes={[20, 24, 24]} text={props.quote.heading2}/>
          <br />
          <Typography className="" fontWeight="300" color="#212121" fontSizes={[18, 18, 18]} variant="paragraph2" text={props.quote.text}/>
        </div>
        <div className="mobileImage">
          <img className="mobileRim" alt="Mobile View" src="/images/home/phone.png"/>
          <LottieAnimation dataUrl={props.phoneJson} />
        </div>
      </div>
      <div className="rightContainer">
        <div>
          <Carousal variant="leftMode">
            {props.slides.map( slide => 
              <div className="" key={slide.heading}>
                <Typography variant="h6" color="#fff" fontSizes={[18, 18, 18]} text={slide.heading} />
                <br />
                <Typography className="subHeading" variant="paragraph2" fontWeight="500" color="#fff" fontSizes={[16, 16, 16]} text={slide.text} />
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