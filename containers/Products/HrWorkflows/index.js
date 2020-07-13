/**
 *
 * HrWorkflows
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Input from '../../../components/Input';
import Reviews from '../../../components/Reviews';
import ScheduleDemo from '../../../components/ScheduleDemo';
import ScheduleDemoButton from '../../../components/ScheduleDemoButton';
import KnowMore from '../../../components/KnowMore';
import Platforms from '../../../components/Platforms';
import FadeIn from '../../../components/VisibilitySensor/FadeIn';
import Slide from '../../../components/VisibilitySensor/Slide';
import LottieAnimation from "../../../components/LottieAnimation";

import IconHighlightsAll from './IconHighlightsAll';
import FeaturesFirst from './FeaturesFirst';
import FeaturesSecond from './FeaturesSecond';
import FeaturesThird from './FeaturesThird';
import MobileFeatures from './MobileFeatures';
import { HrWorflowsStyles } from './styles';

function HrWorkflows(props) {
  return (
    <HrWorflowsStyles>
      <section className="section section0">
        <div className="topContainer">
          <FadeIn className="text desktop">
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="Streamline employee workflows with"/>
            <br />
            <Typography variant="h1" fontSizes={[20, 34, 40]} text="AI-enabled enterprise conversations"/>
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text="Let your employees request leaves, reimbursements, tax deductions"/>
            <br />
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text="and other HR transactions via single conversational platform."/>
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <ScheduleDemoButton type="link" fullWidth name="Schedule demo" variant="contained" size="large"/>
              </div>
            </Slide>
          </FadeIn>
          <FadeIn className="text mobile">
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="Streamline employee workflows"/>
            <Typography variant="h1" fontSizes={[20, 34, 40]} text="with AI-enabled enterprise conversations"/>
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text="Let your employees request leaves, reimbursements, tax deductions and other HR transactions via single conversational platform."/>
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text=""/>
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <ScheduleDemoButton type="link" fullWidth name="Schedule demo" variant="contained" size="large"/>
              </div>
            </Slide>
          </FadeIn>
          <Slide from='right' className="bowlImage">
            <img alt="HR helpdesk" src="/images/home/mobile.png" />
            <img className="heroBg" src="/images/heroBg.svg" />
            <LottieAnimation dataUrl="/images/hrWorkflows/phone.json" />
          </Slide>
      </div>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography className="" variant="h3" fontSizes={[20, 28, 28]} text="Boost employee productivity"/>
          <Typography className="halfBackground highlight desktop" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="with simplified people management"/>
          <Typography className="halfBackground highlight mobile" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="with simplified people"/>
          <Typography className="halfBackground highlight mobile" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="management"/>
        </FadeIn>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2 desktop">
        <FadeIn className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Manage employee requests"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="in the easiest possible way"/>
        </FadeIn>
        <FeaturesFirst></FeaturesFirst>
      </section>
      <section className="section section3 shortSection desktop">
        <FeaturesSecond />
      </section>
      <section className="section section3 shortSection desktop">
        <FeaturesThird />
      </section>
      <section className="section section2 mobile">
        <FadeIn className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Manage employee requests"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="in the easiest possible way"/>
        </FadeIn>
        <MobileFeatures />
      </section>
      <section className="section buttonSection">
        <ScheduleDemoButton />
      </section>
      <section className="section section5">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Bring it where you are"/>
          <Typography className="halfBackground highlight desktop" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="We integrate with all the platforms you love"/>
          <Typography className="halfBackground highlight mobile" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="We integrate with all"/>
          <Typography className="halfBackground highlight mobile" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="the platforms you love"/>
        </FadeIn>
        <Platforms />
        <div className="knowMore center">
          <KnowMore variant="contained" size="large" />
        </div>
      </section>
      <section className="section section7">
        <FadeIn className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Our customers love us"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="for what we do"/>
        </FadeIn>
        <Reviews />
      </section>
      <section className="section section8 noMargin">
        <ScheduleDemo variant="oneStep" />
      </section>
    </HrWorflowsStyles>
  );
}

HrWorkflows.propTypes = {};

export default memo(HrWorkflows);