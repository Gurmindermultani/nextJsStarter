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
        top: -20px;
        left: -110px;
        width: 130%;
      }
      &.a2 {
        top: -15px;
        right: -70px;
        width: 60%;
      }
      &.a3 {
        bottom: -60px;
        right: -90px;
        width: 140%;
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
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Smart ticketing"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Get rid of answering repetitive questions. Add frequently asked questions directly to your knowledge base with a single click and auto-answer repetitive queries."}/>
        </Slide>
        <Slide from='left' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Automated updates"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Keep your employees updated with the automated ticket status and eliminate the need of employee follow-ups."}/>
        </Slide>
      </div>
      <div className="rightContainer">
        <div className="image center">
          <img src="/images/bg.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/caseManagement/featuresThird/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/caseManagement/featuresThird/a2.svg"/>
          </Slide>
          <Slide from='up' className="a3">
            <img src="/images/caseManagement/featuresThird/a3.svg"/>
          </Slide>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);