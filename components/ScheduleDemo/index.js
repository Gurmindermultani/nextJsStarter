/**
 *
 * ScheduleDemo
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography';
import Input from '../Input';
import Button from '../Button';
import FadeIn from '../VisibilitySensor/FadeIn';
import Slide from '../VisibilitySensor/Slide';


const ScheduleDemoStyles = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .demoInput {
    padding-top: 40px;
    .form-group {
      width: 360px;
      margin-right: 16px;
      margin-top: 20px;
    }
    button {
      min-width: 172px;
    }
  }
  .quoteContainer {
    margin: 0;
  }
  @media only screen and (max-width: 760px) {
    .form-group, .left, .right {
      display: none;
    }
  }
`;

function ScheduleDemo(props) {
  return (
    <ScheduleDemoStyles>
      <div>
        <Slide from="left" className="left">
          <img alt="animationImputs" src="/images/leftDemo.svg"/>
        </Slide>
      </div>
      <div>
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Schedule your free demo"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="right away"/>
        </FadeIn>
        <Slide className="demoInput center">
          <Input onChange={() => null} name="schedule" placeholder="Your work email"/>
          <Button name="Schedule Demo" variant="contained" size="large"/>
        </Slide>
      </div>
      <div>
        <Slide from="right" className="right">
          <img alt="animationImputs" src="/images/rightDemo.svg"/>
        </Slide>
      </div>
    </ScheduleDemoStyles>
  );
}

ScheduleDemo.propTypes = {};

export default memo(ScheduleDemo);