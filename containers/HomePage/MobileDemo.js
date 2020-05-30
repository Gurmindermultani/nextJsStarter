/**
 *
 * MobileDemo
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
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
    .mobileDemoContainer {
      position: absolute;
      top: 13px;
      left: 54px;
      z-index: -1;
      width: 200px;
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
      <div className="mobileImage">
        <img alt="Mobile View" src="/images/home/mobile.png"/>
        <div className="mobileDemoContainer">
          <img alt="Mobile View Demo" src="/images/home/phoneAnimation.gif"/>
        </div>
      </div>
      <div className="boxDialog topLeft">
        <div className="textBox">
          <Typography className="textHeading" variant="h6" fontSize="20px" text="Conversational interface"/>
          <Typography variant="paragraph2" fontSize="16px" text="Employees chat with the virtual HR assistant."/>
        </div>
      </div>
      <div className="boxDialog bottomLeft">
        <div className="textBox">
          <Typography className="textHeading" variant="h6" fontSize="20px" text="Automated replies"/>
          <Typography variant="paragraph2" fontSize="16px" text="They get quick automated replies to their queries."/>
        </div>
      </div>
      <div className="boxDialog topRight">
        <div className="textBox">
          <Typography className="textHeading" variant="h6" fontSize="20px" text="Real-time ticketing"/>
          <Typography variant="paragraph2" fontSize="16px" text="There’s an option to raise tickets when needed."/>
        </div>
      </div>
      <div className="boxDialog bottomRight">
        <div className="textBox">
          <Typography className="textHeading" variant="h6" fontSize="20px" text="Employee self-service"/>
          <Typography variant="paragraph2" fontSize="16px" text="Employees also submit their leave request via chat."/>
        </div>
      </div>
      <div className="button">
        <Button size="large" variant="contained" name="Schedule Demo"/>
      </div>
    </MobileDemoStyles>
  );
}

MobileDemo.propTypes = {};

export default memo(MobileDemo);