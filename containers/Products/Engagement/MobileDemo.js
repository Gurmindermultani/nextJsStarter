/**
 *
 * MobileDemo
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "../../../components/VisibilitySensor";

import Typography from '../../../components/Typography';
import Button from '../../../components/Button';
import ProductHr from './ProductHr';
import EmployeeExperience from './EmployeeExperience';

const MobileDemoStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .mobileImage {
    position: relative;
    overflow: hidden;
    .mobileRim {
      width: 220px;
      height: 440px;
    }
    .mobileDemoContainer {
      position: absolute;
      top: 12px;
      left: 14px;
      z-index: -1;
      width: 195px;
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
`;

function MobileDemo(props) {
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
                <img className="mobileRim" alt="Mobile View" src="/images/home/phone.png" alt="mobile" class="mobileRim"/>
                <div className="mobileDemoContainer">
                  {/* <img alt="Mobile View Demo" src="/images/home/phoneAnimation.gif"/> */}
                  <video width="100%" height="100%" loop autoPlay muted>
                    <source src="/images/home/phoneAnimationVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring delay={300} to={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible
                ? "translateX(0)"
                : "translateX(-200px)",
          }}>
            {({ opacity, transform }) => (
              <div style={{opacity, transform}} className="boxDialog topLeft">
                <div className="textBox">
                  <Typography className="textHeading" variant="h6" fontSize="20px" text="Automated invites"/>
                  <Typography variant="paragraph2" fontSize="16px" text="Invite your employees to participate in a survey."/>
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring delay={300} to={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible
                ? "translateX(0)"
                : "translateX(-200px)",
          }}>
            {({ opacity, transform }) => (
              <div style={{opacity, transform}} className="boxDialog bottomLeft">
                <div className="textBox">
                  <Typography className="textHeading" variant="h6" fontSize="20px" text="Conversational interface"/>
                  <Typography variant="paragraph2" fontSize="16px" text="Employees take part in the conversational survey."/>
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring delay={300} to={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible
                ? "translateX(0)"
                : "translateX(50px)",
          }}>
            {({ opacity, transform }) => (
              <div style={{opacity, transform}} className="boxDialog topRight">
                <div className="textBox">
                  <Typography className="textHeading" variant="h6" fontSize="20px" text="Textual answers"/>
                  <Typography variant="paragraph2" fontSize="16px" text="Ask open-ended questions when required."/>
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring delay={300} to={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible
                ? "translateX(0)"
                : "translateX(50px)",
          }}>
            {({ opacity, transform }) => (
              <div style={{opacity, transform}} className="boxDialog bottomRight">
                <div className="textBox">
                  <Typography className="textHeading" variant="h6" fontSize="20px" text="Employee self-service"/>
                  <Typography variant="paragraph2" fontSize="16px" text="Employees also submit their leave request via chat."/>
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <div className="button">
        <Button size="large" variant="contained" name="Schedule demo"/>
      </div>
    </MobileDemoStyles>
  );
}

MobileDemo.propTypes = {};

export default memo(MobileDemo);