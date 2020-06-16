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
  margin-top: 200px;
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
        top: 22px;
        right: -20px;
        width: 50%;
      }
      &.a3 {
        bottom: -32px;
        left: 74px;
        width: 40%;
        z-index: 1;
      }
      &.a4 {
        bottom: -56px;
        right: -33px;
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
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Search employees"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Ensure super smooth employee experience with easy-to -use employee search option. When stuck in a problem, your employees can easily know whom to reach out."}/>
        </Slide>
        <Slide from='left' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Claim reimbursement"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Manage employee reimbursement claims in the easiest way possible. Your employees just need to upload the receipt photo and add details on the chat itself."}/>
        </Slide>
      </div>
      <div className="rightContainer">
        <div className="image center">
          <img src="/images/bg.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/hrWorkflows/featuresThird/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/hrWorkflows/featuresThird/a2.svg"/>
          </Slide>
          <Slide from='right' className="a3">
            <img src="/images/hrWorkflows/featuresThird/a3.svg"/>
          </Slide>
          <Slide from='right' className="a4">
            <img src="/images/hrWorkflows/featuresThird/a4.svg"/>
          </Slide>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);