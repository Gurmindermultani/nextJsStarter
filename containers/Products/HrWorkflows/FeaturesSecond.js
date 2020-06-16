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
        top: -57px;
        right: -90px;
        width: 85%;
      }
      &.a3 {
        bottom: 139px;
        right: 81px;
        width: 20%;
        z-index: 1;
      }
      &.a4 {
        bottom: -11px;
        right: -23px;
        width: 50%;
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
            <img src="/images/hrWorkflows/featuresSecond/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/hrWorkflows/featuresSecond/a2.svg"/>
          </Slide>
          <Slide from='right' className="a3">
            <img src="/images/hrWorkflows/featuresSecond/a3.svg"/>
          </Slide>
          <Slide from='right' className="a4">
            <img src="/images/hrWorkflows/featuresSecond/a4.svg"/>
          </Slide>
        </div>
      </div>
      <div className="rightContainer">
        <Slide from='right' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Generate payslip"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Make it easy for your employees to extract all their payslips whenever they need. Just a simple message is all it takes."}/>
        </Slide>
        <Slide from='right' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Know tax and deductions"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Don’t burden your HR folks with repetitive tax queries. Let the virtual HR assistant give instant replies to tax-related queries of your employees."}/>
        </Slide>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);