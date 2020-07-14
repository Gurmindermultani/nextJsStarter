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
import ScheduleDemoButton from '../ScheduleDemoButton';
import LottieAnimation from "../../components/LottieAnimation";
import Image from '../Image';
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
      top: 125px;
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
      right: -140px;
      .mobileRim {
        width: 280px;
        height: 560px;
        z-index: 2;
        position: relative;
      }
      .animation {
        position: absolute;
        top: 14px;
        left: 18px;
        z-index: 1;
        width: 88%;
        img {
          width: 100%;
        }
      }
    }
  }
  .rightContainer {
    flex-basis: 60%;
    background: ${props => props.theme.palette.primary.dark};
    padding: 200px 0 100px 180px;
    overflow: hidden;
    .carousalMainContainer {
      width: 1000px;
      height: 123px;
      .prevArrow {
        left: 0;
        top: -75px;
      }
      .nextArrow {
        left: 60px;
        top: -75px;
      }
      .slick-slide {
        padding: 0 32px 0 0;
        span {
          color: #C5D0E6;
        }
        .subHeading {
          margin-top: 18px;
          width: 190px;
        }
        &.slick-active {
          span {
            color: #fff;
          }
        }
      }
    }
    button {
      margin-top: 42px;
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
          <Typography className="" fontWeight="400" color="#212121" fontSizes={[18, 18, 18]} variant="h2" text={props.quote.text}/>
        </div>
        <div className="mobileImage">
          <Image className="mobileRim" alt={props.alt} src={"/images/home/phone.png"} />
          <LottieAnimation dataUrl={props.phoneJson} />
        </div>
      </div>
      <div className="rightContainer">
        <div>
          <Carousal autoplay speed={5000} variant="leftMode">
            {props.slides.map( slide => 
              <div className="" key={slide.heading}>
                <Typography variant="h6" color="#fff" fontSizes={[18, 18, 18]} text={slide.heading} />
                <br />
                <Typography className={"subHeading " + slide.heading} variant="h2" fontWeight="400" color="#fff" fontSizes={[16, 16, 16]} text={slide.text} />
              </div>
            )}
          </Carousal>
        </div>
        <div>
          <ScheduleDemoButton type="link" variant="invertedLight"/>
        </div>
      </div>
    </DeskTopStyles>
  );
}

DeskTop.propTypes = {};

export default memo(DeskTop);