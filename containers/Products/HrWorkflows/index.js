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
import FadeIn from '../../../components/VisibilitySensor/FadeIn';
import Slide from '../../../components/VisibilitySensor/Slide';
import LottieAnimation from "../../../components/LottieAnimation";

import IconHighlightsAll from './IconHighlightsAll';
import FeaturesFirst from './FeaturesFirst';
import FeaturesSecond from './FeaturesSecond';
import FeaturesThird from './FeaturesThird';
import MobileDemo from './MobileDemo';
import Platforms from './Platforms';
import Customers from './Customers';
import Reviews from './Reviews';
import Recognitions from './Recognitions';
import { HrWorflowsStyles } from './styles';

function HrWorkflows(props) {
  return (
    <HrWorflowsStyles>
      <section className="section section0">
        <div className="topContainer">
          <FadeIn className="text">
            <Typography className="topText" variant="h1" fontSize="40px" text="Streamline employee workflows with"/>
            <Typography variant="h1" fontSize="40px" text="AI-enabled enterprise conversations"/>
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSize="22px" variant="paragraph2" text="Let your employees request leaves, reimbursements, tax deductions"/>
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="22px" variant="paragraph2" text="and other HR transactions via single conversational platform."/>
            <Slide className="demoInput">
              <Input name="schedule" placeholder="Your work email"/>
              <Button name="Schedule Demo" variant="contained" size="large"/>
            </Slide>
          </FadeIn>
          <Slide from='right' className="bowlImage">
            <img src="/images/home/mobile.png" />
            <LottieAnimation dataUrl="/images/hrWorkflows/phone.json" />
          </Slide>
      </div>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Boost employee productivity"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="with simplified people management"/>
        </FadeIn>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Manage employee requests"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="in the easiest possible way"/>
        </FadeIn>
        <FeaturesFirst></FeaturesFirst>
      </section>
      <section className="section section3 shortSection">
        <FeaturesSecond />
      </section>
      <section className="section section3 shortSection">
        <FeaturesThird />
      </section>
      <section className="section section5">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="We integrate with all the platforms you love"/>
        </FadeIn>
        <Platforms />
        <div className="knowMore center">
          <Button variant="contained" size="large" name="Know More" />
        </div>
      </section>
      <section className="section section7">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Our customers love us"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="for what we do"/>
        </FadeIn>
        <Reviews />
      </section>
      <section className="section section8 shortSection noPadding">
        <div className="quoteContainer demoContainer">
          <FadeIn className="quoteContainer">
            <Typography variant="h3" fontSize="28px" color="#fff" text="You’re one step away from an excellent employee experience."/>
            <Typography className="halfBackground" fontWeight="300" color="#fff" fontSize="28px" variant="paragraph2" text="Sign up for a free demo right away"/>
          </FadeIn>
          <Slide className="demoInput">
            <Input onChange={() => null} name="schedule" placeholder="Your work email"/>
            <Button name="Schedule Demo" variant="inverted" size="large"/>
          </Slide>
        </div>
      </section>
    </HrWorflowsStyles>
  );
}

HrWorkflows.propTypes = {};

export default memo(HrWorkflows);