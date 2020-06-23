/**
 *
 * MobileDemo
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "../../components/VisibilitySensor";
import Carousal from "../../components/Carousal";
import LottieAnimation from "../../components/LottieAnimation";
import FadeIn from "../../components/VisibilitySensor/FadeIn";

import Typography from '../../components/Typography';
import Button from '../../components/Button';

const MobileDemoStyles = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .mobileImage {
    position: relative;
    overflow: hidden;
    .mobileRim {
      width: calc(100vw);
      height: 270px;
    }
    .animation {
      position: absolute;
      top: 22px;
      left: 54px;
      z-index: -1;
      width: 75%;
      img {
        width: 100%;
      }
    }
  }
  .boxDialog {
    position: absolute;
    max-width: 340px;
    border-radius: 4px;
    padding: 16px 24px;
    &.topLeft {
      left: 0px;
      top: 100px;
      border: 1px solid #212121;
      box-shadow: 0px 4px 16px #00000014;
    }
    &.bottomLeft {
      left: 16px;
      top: 300px;
      border: 1px solid #103577;
      box-shadow: 0px 4px 16px #00000014;
    }
    &.topRight {
      right: 0px;
      top: 5px;
      border: 1px solid #00CEFF;
      box-shadow: 0px 4px 16px #00000014;
    }
    &.bottomRight {
      right: 16px;
      top: 205px;
      border: 1px solid #0F72EE;
      box-shadow: 0px 4px 16px #00000014;
    }
    .textBox {
      span {
        line-height: 26px;
      }
      .textHeading {
        margin-bottom: 10px;
      }
    }
  }
  .button {
    margin-top: 40px;
    button {
      min-width: 172px;
    }
  }
  .mobileCaraousal {
      display: none;
    }
  @media only screen and (max-width: 760px) {
    .boxDialog {
      display: none;
    }
    .mobileCaraousal {
      display: block;
      margin-top: 16px;
      width: calc(100vw - 10px);
      .slick-slide {
        padding: 0 15px;
      }
      .slick-center {
        
      }
      .carousalDialog {
        border-radius: 4px;
        padding: 16px 20px;
        color: white;
        min-height: 146px;
        &.dialog0 {
          background: #212121;
          box-shadow: 0px 4px 16px #00000014;
        }
        &.dialog1 {
          background: #103577;
          box-shadow: 0px 4px 16px #00000014;
        }
        &.dialog2 {
          background: #00CEFF;
          box-shadow: 0px 4px 16px #00000014;
        }
        &.dialog3 {
          background: #0F72EE;
          box-shadow: 0px 4px 16px #00000014;
        }
        .textBox {
          text-align: center;
          span {
            line-height: 26px;
          }
          .textHeading {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;

function MobileDemo(props) {
  console.log(props.slides);
  return (
    <MobileDemoStyles>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring delay={300} to={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible
                ? "translateY(0)"
                : "translateY(0)",
          }}>
            {({ opacity, transform }) => (
              <div style={{opacity, transform}} className="mobileImage">
                <img className="mobileRim" alt="Mobile View" src="/images/mac.png"/>
                <LottieAnimation dataUrl={props.phoneJson} />
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <div className="mobileCaraousal">
        <Carousal variant="mobileCarousal">
          {props.slides.map(( slide, idx) => 
            <div key={"dialog" + idx} className={"carousalDialog topLeft " + ("dialog" + idx)}>
              <div className="textBox">
                <Typography className="textHeading" variant="h6" fontSize="20px" text={slide.heading} />
                <Typography variant="paragraph2" fontSize="16px" text={slide.text}/>
              </div>
            </div>
          )}
        </Carousal>
      </div>
      <div className="button">
        <Button size="large" variant="contained" name="Schedule Demo"/>
      </div>
    </MobileDemoStyles>
  );
}

MobileDemo.propTypes = {};

export default memo(MobileDemo);