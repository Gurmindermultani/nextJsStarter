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
  .rightContainer {
    flex-basis: 48%;
    text-align: right;
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
  .leftContainer {
    flex-basis: 50%;
    position: relative;
    display: flex;
    justify-content: flex-start;
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
        top: 22px;
        left: -10px;
        width: 94%;
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
  @media only screen and (max-width: 760px) {
    margin-bottom: 64px;
    .leftContainer {
      display: none;
    }
    .rightContainer {
      flex-basis: 100%;
      text-align: left;
    }
  }
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
        <div className="image center">
          <img src="/images/bg4.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/faq/featuresSecond/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/faq/featuresSecond/a2.svg"/>
          </Slide>
          <Slide from='right' className="a3">
            <img src="/images/faq/featuresSecond/a3.svg"/>
          </Slide>
          <Slide from='right' className="a4">
            <img src="/images/faq/featuresSecond/a4.svg"/>
          </Slide>
        </div>
      </div>
      <div className="rightContainer">
        <div from='right' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Multiple platforms and channels"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Easily integrate your existing HRIS and collaboration platforms to enterprise conversational AI experience."}/>
        </div>
        <div from='right' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Self-learning AI experience"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Employee experience platform improves itself with every user-interaction and AI-driven feedback loop."}/>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);