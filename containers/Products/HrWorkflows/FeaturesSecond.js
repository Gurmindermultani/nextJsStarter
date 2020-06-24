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
  justify-content: space-between;
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
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.a1 {
        top: 50px;
        left: -110px;
        width: 90%;
      }
      &.a2 {
        top: 20px;
        right: -50px;
        width: 100%;
      }
      &.a3 {
        bottom: 139px;
        right: 81px;
        width: 20%;
        z-index: 1;
      }
      &.a4 {
        bottom: -71px;
        right: -33px;
        width: 70%;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .leftContainer {
      display: none;
    }
    .rightContainer {
      flex-basis: 100%;
    }
  }
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
        <div className="image center">
          <img src="/images/hrWorkflows/featuresSecond/bg.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/hrWorkflows/featuresSecond/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/hrWorkflows/featuresSecond/a2.svg"/>
          </Slide>
          {/* <Slide from='right' className="a3">
            <img src="/images/hrWorkflows/featuresSecond/a3.svg"/>
          </Slide> */}
          <Slide from='right' className="a4">
            <img src="/images/hrWorkflows/featuresSecond/a4.svg"/>
          </Slide>
        </div>
      </div>
      <div className="rightContainer">
        <div from='right' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Generate payslip"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Make it easy for your employees to extract all their payslips whenever they need. Just a simple message is all it takes."}/>
        </div>
        <div from='right' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Know tax and deductions"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Don’t burden your HR folks with repetitive tax queries. Let the virtual HR assistant give instant replies to tax-related queries of your employees."}/>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);