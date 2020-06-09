/**
 *
 * WfhSurveys
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
import { WfhSurveysStyles } from './styles';

function WfhSurveys(props) {
  return (
    <WfhSurveysStyles>
      <section className="section section0">
        <div className="topContainer">
          <FadeIn className="text">
            <Typography className="topText" variant="h1" fontSize="40px" text="Stay connected with your remote"/>
            <Typography variant="h1" fontSize="40px" text="workforce with AI-enabled surveys"/>
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSize="22px" variant="paragraph2" text="Enhance engagement and productivity of your remote"/>
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="22px" variant="paragraph2" text="employees with simple conversational feedback."/>
            <Slide className="demoInput">
              <Input name="schedule" placeholder="Your work email"/>
              <Button name="Schedule Demo" variant="contained" size="large"/>
            </Slide>
          </FadeIn>
          <Slide from='right' className="bowlImage">
            <img src="/images/home/mobile.png" />
            <LottieAnimation dataUrl="/images/wfhSurveys/phone.json" />
          </Slide>
      </div>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Take care of your employees"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="when they need you the most"/>
        </FadeIn>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Make remote working smoother"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="with WFH surveys"/>
        </FadeIn>
        <FeaturesFirst></FeaturesFirst>
      </section>
      <section className="section section3 shortSection">
        <FeaturesSecond />
      </section>
      <section className="section section4 shortSection">
        <FeaturesThird />
      </section>
      <section className="section section5">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Simplest WFH feedback survey"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="to begin with"/>
        </FadeIn>
        <MobileDemo />
      </section>
      <section className="section section6 shortSection">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="We integrate with all the platforms you love"/>
        </FadeIn>
        <Platforms />
      </section>
      <section className="section section7">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="We integrate with all the platforms you love"/>
        </FadeIn>
        <Customers />
      </section>
      <section className="section section8">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="We integrate with all the platforms you love"/>
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
    </WfhSurveysStyles>
  );
}

WfhSurveys.propTypes = {};

export default memo(WfhSurveys);