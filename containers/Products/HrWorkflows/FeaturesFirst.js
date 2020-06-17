/**
 *
 * FeaturesFirst
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../components/Typography';
import Slide from '../../../components/VisibilitySensor/Slide';

const FeaturesFirstStyles = styled.div`
  display: flex;
  height: 430px;
  .leftContainer {
    flex-basis: 50%;
    .headingText {
      line-height: 33px;
      margin-bottom: 12px;
    }
    .descriptionText {
      line-height: 28px;
    }
    .second {
      margin-top: 88px;
    }
  }
  .rightContainer {
    flex-basis: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    .fg {
      position: absolute;
      top: 0px;
    }
  }
  .image {
    position: relative;
    position: relative;
    width: 400px;
    height: 310px;
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.a1 {
        top: -20px;
        left: 20px;
        width: 70%;
      }
      &.a2 {
        top: 16px;
        right: 20px;
        width: 31%;
      }
      &.a3 {
        bottom: -53px;
        right: 0px;
        width: 70%;
      }
    }
  }
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
        <Slide from='left' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Leave management"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Let your employees manage leaves on the go. Employees can view their leave balance and fill up the leave request form via chat itself."}/>
        </Slide>
        <Slide from='left' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Holiday calendar"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Don’t kill your employees’ excitement by making it hard for them to find your annual holiday calendar. Make it available for them in a single click."}/>
        </Slide>
      </div>
      <div className="rightContainer">
        <div className="image center">
          <img src="/images/hrWorkflows/featuresFirst/bg.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/hrWorkflows/featuresFirst/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/hrWorkflows/featuresFirst/a2.svg"/>
          </Slide>
          <Slide from='right' className="a3">
            <img src="/images/hrWorkflows/featuresFirst/a3.svg"/>
          </Slide>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);