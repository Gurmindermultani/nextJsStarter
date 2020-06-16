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
  .rightContainer {
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
  .leftContainer {
    flex-basis: 50%;
    position: relative;
    .fg {
      position: absolute;
      top: 0px;
    }
  }
  .image {
    position: relative;
    width: 400px;
    height: 310px;
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.f1 {
        top: 22px;
        left: 0;
        width: 80%;
      }
      &.f2 {
        top: 0px;
        right: 40px;
        width: 40%;
      }
      &.f3 {
        bottom: 68px;
        right: -10px;
        width: 40%;
      }
      &.f4 {
        bottom: -10px;
        right: 40px;
        width: 40%;
      }
    }
  }
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
        <div className="image center">
          <img src="/images/bg.svg"/>
          <Slide from='left' className="f1">
            <img src="/images/wfhSurveys/featuresSecond/f1.svg"/>
          </Slide>
          <Slide from='right' className="f2">
            <img src="/images/wfhSurveys/featuresSecond/f2.svg"/>
          </Slide>
          <Slide from='up' className="f3">
            <img src="/images/wfhSurveys/featuresSecond/f3.svg"/>
          </Slide>
          <Slide from='up' className="f4">
            <img src="/images/wfhSurveys/featuresSecond/f4.svg"/>
          </Slide>
        </div>
      </div>
      <div className="rightContainer">
        <Slide from='right' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Easy integration"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Easily integrate WFH surveys with the workflow channels and HRIS you already use. Take the WFH feedback surveys where your employees are."}/>
        </Slide>
        <Slide from='right' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Textual answers"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Allow your employees to give elaborate feedback through textual answers. Reply to these feedbacks separately while the rest get analyzed automatically."}/>
        </Slide>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);