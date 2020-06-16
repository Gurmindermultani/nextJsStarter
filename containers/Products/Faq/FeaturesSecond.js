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
      &.a1 {
        top: 22px;
        left: 0;
        width: 80%;
      }
      &.a2 {
        top: 0px;
        right: 40px;
        width: 40%;
      }
      &.a3 {
        bottom: 68px;
        right: -10px;
        width: 40%;
      }
      &.a4 {
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
        <Slide from='right' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Multiple platforms and channels"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Easily integrate your existing HRIS and collaboration platforms to enterprise conversational AI experience."}/>
        </Slide>
        <Slide from='right' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Self-learning AI Experience"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Employee experience platform improves itself with every user-interaction and AI-driven feedback loop."}/>
        </Slide>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);