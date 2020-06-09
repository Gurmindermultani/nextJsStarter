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
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  .mobileImage {
    position: relative;
    overflow: hidden;
    .mobileRim {
      width: 740px;
      height: 430px;
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
      top: 30px;
      border: 1px solid #212121;
      box-shadow: 0px 4px 16px #00000014;
    }
    &.bottomLeft {
      left: 10px;
      top: 260px;
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
    align-self: center;
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
                <img className="mobileRim" alt="Mobile View" src="/images/mac.png"/>
                <div className="mobileDemoContainer">
                  
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
                  <Typography className="textHeading" variant="h6" fontSize="20px" text="Analytical reports"/>
                  <Typography variant="paragraph2" fontSize="16px" text="Get intelligent reports on engagment dashboard."/>
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
                  <Typography className="textHeading" variant="h6" fontSize="20px" text="Measure Engagement"/>
                  <Typography variant="paragraph2" fontSize="16px" text="Know your score against employee engagement parameters."/>
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <div className="button">
        <Button size="large" variant="contained" name="Schedule Demo"/>
      </div>
    </MobileDemoStyles>
  );
}

MobileDemo.propTypes = {};

export default memo(MobileDemo);