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
  margin-bottom: 120px;
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
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.a1 {
        top: -10px;
        left: -130px;
        width: 140%;
      }
      &.a2 {
        top: 136px;
        left: 8px;
        width: 150%;
      }
      &.a3 {
        bottom: -10px;
        right: -150px;
        width: 160%;
      }
    }
  }
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
        <Slide from='left' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Conversational interface"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Make it simple for your employees to give feedback with easy-to-use AI-powered conversations. Eliminate the hassle of poor user interface and long feedback forms."}/>
        </Slide>
        <Slide from='left' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Easy predictive replies"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Save your employees’ time by giving them the option of replying with a single click. Show predictive replies upfront on the chat."}/>
        </Slide>
      </div>
      <div className="rightContainer">
        <div className="image center">
          <img src="/images/wfhSurveys/featuresFirst/bg.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/wfhSurveys/featuresFirst/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/wfhSurveys/featuresFirst/a2.svg"/>
          </Slide>
          <Slide from='right' className="a3">
            <img src="/images/wfhSurveys/featuresFirst/a3.svg"/>
          </Slide>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);