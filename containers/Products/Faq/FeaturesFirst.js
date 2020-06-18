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
    justify-content: flex-end;
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
        top: 0;
        left: -40px;
        width: 85%;
      }
      &.a2 {
        top: 16px;
        right: 20px;
        width: 31%;
      }
      &.a3 {
        bottom: -15px;
        right: -30px;
        width: 90%;
      }
    }
  }
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
        <Slide from='left' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Natural Language Understanding"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Understand your employee queries accurately and let their virtual HR assistant reply instantly."}/>
        </Slide>
        <Slide from='left' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Knowledge Management"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Combine your policy documents with our intelligent knowledge base and give your employees personalized experience."}/>
        </Slide>
      </div>
      <div className="rightContainer">
        <div className="image center">
          <img src="/images/bg.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/faq/featuresFirst/a1.svg"/>
          </Slide>
          <Slide from='right' className="a3">
            <img src="/images/faq/featuresFirst/a3.svg"/>
          </Slide>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);