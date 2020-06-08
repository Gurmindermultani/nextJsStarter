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
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
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