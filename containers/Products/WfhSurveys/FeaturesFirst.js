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
        top: 10px;
        left: 0;
        width: 70%;
      }
      &.a2 {
        top: 106px;
        left: 78px;
        width: 80%;
      }
      &.a3 {
        bottom: 30px;
        right: 0px;
        width: 78%;
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
          <img src="/images/bg.svg"/>
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