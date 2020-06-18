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
        top: -30px;
        left: -90px;
        width: 95%;
      }
      &.a2 {
        top: 16px;
        right: 10px;
        width: 40%;
      }
      &.a3 {
        bottom: -45px;
        right: -60px;
        width: 110%;
      }
    }
  }
`;

function FeaturesFirst(props) {
  return (
    <FeaturesFirstStyles>
      <div className="leftContainer">
        <Slide from='left' className="first">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Conversational Interface"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Give your employees an interactive user interface where they chat directly with the virtual HR assistant."}/>
        </Slide>
        <Slide from='left' className="second">
          <Typography className="headingText" variant="h4" fontSize="22px" text={"Nudge notifications"}/>
          <Typography className="descriptionText" variant="paragraph2" fontSize="18px" text={"Inform all employees about important announcements and events at once by sending bulk notifications."}/>
        </Slide>
      </div>
      <div className="rightContainer">
        <div className="image center">
          <img src="/images/faq/featuresThird/bg.svg"/>
          <Slide from='left' className="a1">
            <img src="/images/faq/featuresThird/a1.svg"/>
          </Slide>
          <Slide from='right' className="a2">
            <img src="/images/faq/featuresThird/a2.svg"/>
          </Slide>
          <Slide from='right' className="a3">
            <img src="/images/faq/featuresThird/a3.svg"/>
          </Slide>
        </div>
      </div>
    </FeaturesFirstStyles>
  );
}

FeaturesFirst.propTypes = {};

export default memo(FeaturesFirst);