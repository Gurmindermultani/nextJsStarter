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
  justify-content: space-between;
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
      margin-top: 64px;
    }
  }
  .rightContainer {
    flex-basis: 40%;
    display: flex;
    justify-content: center;
    position: relative;
    .fg {
      position: absolute;
      top: 0px;
    }
  }
  .image {
    position: relative;
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.a1 {
        top: -20px;
        left: -100px;
        width: 130%;
      }
      &.a2 {
        bottom: -46px;
        right: -120px;
        width: 130%;
      }
    }
  }
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
        <Slide from='left' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Analytical dashboard"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Get detailed real-time actionable insights right on your analytical dashboard. Analyze employees’ response without any bias with the help of AI."}/>
        </Slide>
        <Slide from='left' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Multiple parameters"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Measure your remote employee engagement on multiple parameters. Get separate scores against each parameter and see where you need to improve."}/>
        </Slide>
      </div>
      <div className="rightContainer">
        <div className="image center">
          <img src="/images/wfhSurveys/featuresThird/bg.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/wfhSurveys/featuresThird/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/wfhSurveys/featuresThird/a2.svg"/>
          </Slide>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);