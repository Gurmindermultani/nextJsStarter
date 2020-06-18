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
    div {
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
      &.a1 {
        top: -12px;
        left: -50px;
        width: 120%;
        z-index: 1;
      }
      &.a2 {
        top: 114px;
        left: -33px;
        width: 110%;
      }
      &.a3 {
        bottom: -40px;
        left: -50px;
        width: 120%;
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
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Conversational UI"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Chat interface ticketing platform that simply talks to your employee instead of throwing complicated forms on them."}/>
        </Slide>
        <Slide from='left' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Pre-built topics"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Huge knowledge base and artificial intelligence combined with domain expertise gives employees pre-built topics upfront."}/>
        </Slide>
      </div>
      <div className="rightContainer">
        <div className="image">
          <img src="/images/bg3.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/caseManagement/featuresFirst/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/caseManagement/featuresFirst/a2.svg"/>
          </Slide>
          <Slide from='up' className="a3">
            <img src="/images/caseManagement/featuresFirst/a3.svg"/>
          </Slide>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);