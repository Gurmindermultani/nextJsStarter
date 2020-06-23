/**
 *
 * ScheduleDemo
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography';
import Link from 'next/link'
import Button from '../Button';
import FadeIn from '../VisibilitySensor/FadeIn';
import Slide from '../VisibilitySensor/Slide';


const ScheduleDemoStyles = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0F72EE;
  padding: 80px 0;
  position: relative;
  .topLeft {
    position: absolute;
    top: 0;
    left: 0;
  }
  .bottomRight {
    position: absolute;
    bottom: 0;
    right: 0;
  }
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
    margin: 0 !important;
    span {
      color: white;
    }
  }
  @media only screen and (max-width: 760px) {
    .form-group, .left, .right {
      display: none;
    }
    .topLeft {
      img {
        width: 50px;
      }
    }
    .bottomRight {
      img {
        width: 50px;
      }
    }
  }
`;

function ScheduleDemo(props) {
  if (props.variant === "knowHow") {
    return (
      <ScheduleDemoStyles>
        <div className="topLeft">
          <img alt="animationImputs" src="/images/demo/1.svg"/>
        </div>
        <div>
          <FadeIn className="quoteContainer">
            <Typography variant="h3" fontSizes={[20, 28, 28]} text="Know how Leena AI can add value"/>
            <Typography className="" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="to your organization."/>
          </FadeIn>
          <Slide className="demoInput center">
            {/* <Input onChange={() => null} name="schedule" placeholder="Your work email"/> */}
            <Link href="/schedule-demo">
              <div>
                <Button name="Schedule Demo" variant="inverted" size="large"/>
              </div>
            </Link>
          </Slide>
        </div>
        <div className="bottomRight">
          <img alt="animationImputs" src="/images/demo/2.svg"/>
        </div>
      </ScheduleDemoStyles>
    );
  }
  if (props.variant === "engage") {
    return (
      <ScheduleDemoStyles>
        <div className="topLeft">
          <img alt="animationImputs" src="/images/demo/1.svg"/>
        </div>
        <div>
          <FadeIn className="quoteContainer">
            <Typography variant="h3" fontSizes={[20, 28, 28]} text=" Get started with outstanding employee engagement"/>
            <Typography className="" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="right away"/>
          </FadeIn>
          <Slide className="demoInput center">
            {/* <Input onChange={() => null} name="schedule" placeholder="Your work email"/> */}
            <Link href="/schedule-demo">
              <div>
                <Button name="Schedule Demo" variant="inverted" size="large"/>
              </div>
            </Link>
          </Slide>
        </div>
        <div className="bottomRight">
          <img alt="animationImputs" src="/images/demo/2.svg"/>
        </div>
      </ScheduleDemoStyles>
    );
  }
  if (props.variant === "oneStep") {
    return (
      <ScheduleDemoStyles>
        <div className="topLeft">
          <img alt="animationImputs" src="/images/demo/1.svg"/>
        </div>
        <div>
          <FadeIn className="quoteContainer">
            <Typography variant="h3" fontSizes={[20, 28, 28]} text="You’re one step away from an excellent employee experience."/>
            <Typography className="" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="Book your live demo right away"/>
          </FadeIn>
          <Slide className="demoInput center">
            {/* <Input onChange={() => null} name="schedule" placeholder="Your work email"/> */}
            <Link href="/schedule-demo">
              <div>
                <Button name="Schedule Demo" variant="inverted" size="large"/>
              </div>
            </Link>
          </Slide>
        </div>
        <div className="bottomRight">
          <img alt="animationImputs" src="/images/demo/2.svg"/>
        </div>
      </ScheduleDemoStyles>
    );
  }
  if (props.variant === "discover") {
    return (
      <ScheduleDemoStyles>
        <div className="topLeft">
          <img alt="animationImputs" src="/images/demo/1.svg"/>
        </div>
        <div>
          <FadeIn className="quoteContainer">
            <Typography variant="h3" fontSizes={[20, 28, 28]} text="Discover how Leena AI can help you transform "/>
            <Typography className="" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="your employee experience"/>
          </FadeIn>
          <Slide className="demoInput center">
            {/* <Input onChange={() => null} name="schedule" placeholder="Your work email"/> */}
            <Link href="/schedule-demo">
              <div>
                <Button name="Schedule Demo" variant="inverted" size="large"/>
              </div>
            </Link>
          </Slide>
        </div>
        <div className="bottomRight">
          <img alt="animationImputs" src="/images/demo/2.svg"/>
        </div>
      </ScheduleDemoStyles>
    );
  }
  return (
    <ScheduleDemoStyles>
      <div className="topLeft">
        <img alt="animationImputs" src="/images/demo/1.svg"/>
      </div>
      <div>
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Schedule your free demo"/>
          <Typography className="" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="right away"/>
        </FadeIn>
        <Slide className="demoInput center">
          {/* <Input onChange={() => null} name="schedule" placeholder="Your work email"/> */}
          <Link href="/schedule-demo">
            <div>
              <Button name="Schedule Demo" variant="inverted" size="large"/>
            </div>
          </Link>
        </Slide>
      </div>
      <div className="bottomRight">
        <img alt="animationImputs" src="/images/demo/2.svg"/>
      </div>
    </ScheduleDemoStyles>
  );
}

ScheduleDemo.propTypes = {};

export default memo(ScheduleDemo);