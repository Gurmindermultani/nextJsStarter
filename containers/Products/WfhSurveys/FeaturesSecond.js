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
  margin-bottom: 120px;
  .rightContainer {
    flex-basis: 50%;
    text-align: right;
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
    flex-basis: 40%;
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
    width: 400px;
    height: 310px;
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.a1 {
        top: 22px;
        left: 0;
        width: 88%;
      }
      &.a2 {
        top: -10px;
        right: 10px;
        width: 36%;
      }
      &.a3 {
        bottom: 68px;
        right: -60px;
        width: 36%;
      }
      &.a4 {
        bottom: -40px;
        right: -10px;
        width: 36%;
      }
    }
  }
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
        <div className="image center">
          <img src="/images/wfhSurveys/featuresSecond/bg.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/wfhSurveys/featuresSecond/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/wfhSurveys/featuresSecond/a2.svg"/>
          </Slide>
          <Slide from='up' className="a3">
            <img src="/images/wfhSurveys/featuresSecond/a3.svg"/>
          </Slide>
          <Slide from='up' className="a4">
            <img src="/images/wfhSurveys/featuresSecond/a4.svg"/>
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