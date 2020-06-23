/**
 *
 * TopContainer
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'
import { Spring } from 'react-spring/renderprops.cjs';
import Slide from "../../components/VisibilitySensor/Slide";

import Typography from '../../components/Typography';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LottieAnimation from "../../components/LottieAnimation";
import FadeIn from '../../components/VisibilitySensor/FadeIn';

const TopContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  .bg {
    position: absolute;
    top: 0px;
    left: 0px;
    background: aqua;
    height: 100vh;
    width: 500px;
    z-index: -1;
    clip-path: url(#wave);
  }
  .leftContainer {
    flex-basis: 100%;
    .animatedText {
      text-align: center;
    }
    .animatedDemoInput {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 32px;
      .form-group {
        margin-top: 0;
      }
      .errorContainer {
        display: none;
      }
      .fullWidth {
        flex-basis: 100%;
        margin-right: 0px;
      }
      .buttons {
        width: 172px;
      }
    }
  }
  .rightContainer {
    flex-basis: 45%;
  }
  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
    .leftContainer {
      flex-basis: 100%;
      .animatedText {
        text-align: center;
      }
      .animatedDemoInput {
        display: flex;
        align-items: center;
        margin-top: 32px;
        flex-wrap: wrap;
        .form-group {
          margin-top: 0;
          display: none;
        }
        .errorContainer {
          display: none;
        }
        .fullWidth {
          flex-basis: 100%;
          margin-right: 0px;
        }
        .buttons {
          width: 100%;
        }
      }
    }
    .rightContainer {
      flex-basis: 100%;
      margin-top: 32px;
    }
  }
`;

function TopContainer(props) {
  return (
    <TopContainerStyles>
      {/* <div className="bg">
        <svg>
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path className="st0" d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z"/>
          </clipPath>
        </svg>
       </div> */}
      <div className="leftContainer">
        <FadeIn className="animatedText">
          <Typography className="highlight" variant="h1" fontSizes={[20, 38, 40]} text="Redefine employee experience"/>
          <br />
          <Typography fontWeight="300" color="#212121" fontSizes={[20, 38, 40]} variant="h4" text="with conversational workflow automation"/>
          <br />
        </FadeIn>
        <Slide className="animatedDemoInput">
          {/* <Input className="fullWidth" onChange={() => null} name="schedule" placeholder="Your work email"/> */}
          <Link href="/schedule-demo">
            <div className="buttons">
              <Button fullWidth name="Schedule demo" variant="contained" size="large"/>
            </div>
          </Link>
        </Slide>
      </div>
      {/* <Slide from="right" className="rightContainer">
        <LottieAnimation dataUrl="/images/home/home.json" />
      </Slide> */}
    </TopContainerStyles>
  );
}

TopContainer.propTypes = {};

export default memo(TopContainer);