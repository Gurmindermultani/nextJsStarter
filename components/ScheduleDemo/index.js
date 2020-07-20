/**
 *
 * ScheduleDemo
 *
 */

import React, { memo, useState } from 'react';
import { withRouter } from 'next/router'
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
    img {
      width: 100px;
    }
  }
  .bottomRight {
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      width: 100px;
    }
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
  .demoButton {
    position: relative;
    img {
      position: absolute;
      display: none;
      right: -113px;
      top: -28px;
      transform: scale(0.8);
    }
    .interested {
      position: absolute;
      display: none;
      right: -192px;
      top: -30px;
      transform: rotate(20deg) scale(0.8);
    }
  }
  @media only screen and (max-width: 760px) {
    .quoteContainer {
      padding: 0 30px;
      text-align: center;
    }
    .form-group, .left, .right {
      display: none;
    }
    .topLeft {
      top: -1px;
      img {
        width: 50px;
      }
    }
    .bottomRight {
      bottom: -6px;
      img {
        width: 50px;
      }
    }
    .demoButton {
      width: 86%;
      button {
        width: 100%;
        height: 40px;
      }
      img, .interested {
        display: none;
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
            <Link href={{ pathname: "/schedule-demo", query: props.router.query }}>
              <div className="demoButton">
                <Button className={props.className} name="Schedule demo" variant="inverted" size="large"/>
                <img alt="interedtedLine" src="images/icons/arrow-interested.svg" />
                <Typography className="interested" fontWeight="600" color="#fff" fontSizes={[20, 20, 20]} variant="h2" text="Interested?"/>
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
  if (props.variant === "wfh") {
    return (
      <ScheduleDemoStyles>
        <div className="topLeft">
          <img alt="animationImputs" src="/images/demo/1.svg"/>
        </div>
        <div>
          <FadeIn className="quoteContainer">
            <Typography className="desktop" variant="h3" fontSizes={[20, 28, 28]} text="Get started with remote employee engagement"/>
            <Typography className="desktop" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="right away"/>
            <Typography className="mobile" variant="h3" fontSizes={[20, 28, 28]} text="Get started with remote employee engagement right away"/>
          </FadeIn>
          <Slide className="demoInput center">
            {/* <Input onChange={() => null} name="schedule" placeholder="Your work email"/> */}
            <Link href={{ pathname: "/schedule-demo", query: props.router.query }}>
              <div className="demoButton">
                <Button className={props.className} name="Schedule demo" variant="inverted" size="large"/>
                <img alt="interedtedLine" src="images/icons/arrow-interested.svg" />
                <Typography className="interested" fontWeight="600" color="#fff" fontSizes={[20, 20, 20]} variant="h2" text="Interested?"/>
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
            <div className="demoButton">
              <Button onClick={props.scheduleDemoClickFn} className={props.className} name="Schedule demo" variant="inverted" size="large"/>
              <img alt="interedtedLine" src="images/icons/arrow-interested.svg" />
              <Typography className="interested" fontWeight="600" color="#fff" fontSizes={[20, 20, 20]} variant="h2" text="Interested?"/>
            </div>
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
            <Link href={{ pathname: "/schedule-demo", query: props.router.query }}>
              <div className="demoButton">
                <Button className={props.className} name="Schedule demo" variant="inverted" size="large"/>
                <img alt="interedtedLine" src="images/icons/arrow-interested.svg" />
                <Typography className="interested" fontWeight="600" color="#fff" fontSizes={[20, 20, 20]} variant="h2" text="Interested?"/>
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
            <Link href={{ pathname: "/schedule-demo", query: props.router.query }}>
              <div className="demoButton">
                <Button className={props.className} name="Schedule demo" variant="inverted" size="large"/>
                <img alt="interedtedLine" src="images/icons/arrow-interested.svg" />
                <Typography className="interested" fontWeight="600" color="#fff" fontSizes={[20, 20, 20]} variant="h2" text="Interested?"/>
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
          <Link href={{ pathname: "/schedule-demo", query: props.router.query }}>
            <div className="demoButton">
              <Button className={props.className} name="Schedule demo" variant="inverted" size="large"/>
              <img alt="interedtedLine" src="images/icons/arrow-interested.svg" />
              <Typography className="interested" fontWeight="600" color="#fff" fontSizes={[20, 20, 20]} variant="h2" text="Interested?"/>
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

export default memo(withRouter(ScheduleDemo));