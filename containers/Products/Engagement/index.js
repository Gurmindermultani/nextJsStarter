/**
 *
 * Engagement
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Input from '../../../components/Input';
import FadeIn from '../../../components/VisibilitySensor/FadeIn';
import Slide from '../../../components/VisibilitySensor/Slide';
import LottieAnimation from "../../../components/LottieAnimation";
import Platforms from '../../../components/Platforms';
import Customers from '../../../components/Customers';
import Reviews from '../../../components/Reviews';
import ScheduleDemo from '../../../components/ScheduleDemo';
import ScheduleDemoButton from '../../../components/ScheduleDemoButton';
import KnowMore from '../../../components/KnowMore';
import MobileDemo from '../../../components/MobileDemo';
import MacDemo from '../../../components/MacDemo';

import IconHighlightsAll from './IconHighlightsAll';
import ProductHr from './ProductHr';
import ProductMore from './ProductMore';
import MobileFeatures from './MobileFeatures';
import { EngagementStyles } from './styles';

const mobileSlides = [
  {
    heading: "Automated invites",
    text: "Invite your employees to participate in a survey."
  },
  {
    heading: "Conversational interface",
    text: "Employees take part in the conversational survey.",
  },
  {
    heading: "Textual answers",
    text: "Ask open-ended questions when required.",
  },
  {
    heading: "Simple and customized",
    text: "The survey is short, simple and specific for each employee.",
  },
];

const macSlides = [
  {
    heading: "Analytical reports",
    text: "Get intelligent reports on engagment dashboard."
  },
  {
    heading: "Measure Engagement",
    text: "Know your score against employee engagement parameters.",
  },
];

function Engagement(props) {
  return (
    <EngagementStyles>
      <section className="section section0">
        <div className="topContainer">
          <div className="bg" />
          <FadeIn className="text desktop">
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="Build a world-class company culture"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text="Get real-time actionable insights with AI-driven"/>
            <br />
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text="employee engagement surveys."/>
            <br />
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <ScheduleDemoButton type="link" fullWidth name="Schedule demo" variant="contained" size="large"/>
              </div>
            </Slide>
          </FadeIn>
          <FadeIn className="text mobile">
            <Typography className="" variant="h1" fontSizes={[20, 34, 40]} text="Build a world-class"/>
            <br />
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="company culture"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text="Get real-time actionable insights with AI-driven employee engagement surveys."/>
            <br />
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text=""/>
            <br />
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <ScheduleDemoButton type="link" fullWidth name="Schedule demo" variant="contained" size="large"/>
              </div>
            </Slide>
          </FadeIn>
          {/* <Slide from='right' className="bowlImage">
            <img src="/images/home/mobile.png" />
            <img className="heroBg" src="/images/heroBg.svg" />
            <LottieAnimation dataUrl="/images/engage/phone.json" />
          </Slide> */}
      </div>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Boost organizational happiness"/>
          <Typography className="highlight halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="with outstanding employee experience"/>
        </FadeIn>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography className="" variant="h3" fontSizes={[20, 28, 28]} text="Discover your path"/>
          <Typography className="highlight halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="to excellent employee engagement"/>
        </FadeIn>
        <div className="products desktop">
          <ProductHr />
        </div>
        <div className="products desktop">
          <ProductMore />
        </div>
        <div className="products mobile">
          <MobileFeatures />
        </div>
      </section>
      <section className="section section3 noMargin">
        <div className="mobile">
          <FadeIn className="quoteContainer">
            <Typography variant="h3" fontSizes={[20, 28, 28]} text="Employee engagement"/>
            <Typography className="highlight halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="can’t be any simpler"/>
          </FadeIn>
        </div>
        <MobileDemo phoneJson="/images/engage/feature/mobile.json" slides={mobileSlides} quote={{ heading1: "Employee  ", heading2: "engagement", text: "can’t be any simpler" }} />
      </section>
      <section className="section section4 noMargin">
        <div className="mobile">
          <FadeIn className="quoteContainer">
            <Typography variant="h3" fontSizes={[20, 28, 28]} text="Enhance employee performance"/>
            <Typography className="highlight halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="with real-time engagement metrics"/>
          </FadeIn>
        </div>
        <MacDemo phoneJson="/images/engage/feature/mac.json" slides={macSlides} quote={{ heading1: "Enhance", heading2: "employee", heading3: " performance", text: "with real-time engagement metrics" }} />
      </section>
      <section className="section section5 shortSection">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Bring it where you are"/>
          <Typography className="highlight halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="We integrate with all the platforms you love"/>
        </FadeIn>
        <Platforms />
        <div className="knowMore center">
          <KnowMore variant="contained" size="large" />
        </div>
      </section>
      <section className="section section6">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Know our extended family"/>
          <Typography className="highlight halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="300000+ employees across the globe use Leena AI"/>
        </FadeIn>
        <Customers />
      </section>
      <section className="section section7">
        <FadeIn className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Our customers love us"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="for what we do"/>
        </FadeIn>
        <Reviews />
      </section>
      <section className="section section8 noMargin">
        <ScheduleDemo variant="engage" />
      </section>
    </EngagementStyles>
  );
}

Engagement.propTypes = {};

export default memo(Engagement);