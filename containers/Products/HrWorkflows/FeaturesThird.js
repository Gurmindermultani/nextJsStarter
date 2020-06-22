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
      margin-top: 88px;
    }
  }
  .rightContainer {
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
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.a1 {
        bottom: -35px;
        right: -85px;
        width: 110%;
        z-index: 1;
      }
      &.a3 {
        top: 52px;
        right: -70px;
        width: 80%;
      }
      &.a2 {
        bottom: -12px;
        left: -14px;
        width: 50%;
      }
      &.a4 {
        top: 20px;
        left: -76px;
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .rightContainer {
      display: none;
    }
    .leftContainer {
      flex-basis: 100%;
    }
  }
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
        <Slide from='left' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Search employees"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Ensure super smooth employee experience with easy-to-use employee search option. When stuck in a problem, your employees can easily know whom to reach out."}/>
        </Slide>
        <Slide from='left' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Claim reimbursement"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Manage employee reimbursement claims in the easiest way possible. Your employees just need to upload the receipt photo and add details on the chat itself."}/>
        </Slide>
      </div>
      <div className="rightContainer">
        <div className="image center">
          <img src="/images/hrWorkflows/featuresThird/bg.svg"/>
          <Slide from='right' className="a1">
            <img src="/images/hrWorkflows/featuresThird/a1.svg"/>
          </Slide>
          <Slide from='down' className="a2">
            <img src="/images/hrWorkflows/featuresThird/a2.svg"/>
          </Slide>
          <Slide from='up' className="a3">
            <img src="/images/hrWorkflows/featuresThird/a3.svg"/>
          </Slide>
          <Slide from='left' className="a4">
            <img src="/images/hrWorkflows/featuresThird/a4.svg"/>
          </Slide>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);