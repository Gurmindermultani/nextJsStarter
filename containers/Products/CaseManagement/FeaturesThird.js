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
        <div className="bg center">
          <img alt="feature img" src="/images/caseManagement/featuresOne/bg.svg"/>
        </div>
        <div className="fg">
          <div className="img1">
            <img alt="feature img" src="/images/caseManagement/featuresOne/img1.svg"/>
          </div>
          {/* <img alt="feature img" src="/images/caseManagement/featuresOne/img2.svg"/>
          <img alt="feature img" src="/images/caseManagement/featuresOne/img31.svg"/> */}
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);