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
import Platforms from '../../../components/Platforms';
import Customers from '../../../components/Customers';
import Reviews from '../../../components/Reviews';
import FadeIn from '../../../components/VisibilitySensor/FadeIn';
import Slide from '../../../components/VisibilitySensor/Slide';
import LottieAnimation from "../../../components/LottieAnimation";

import IconHighlightsAll from './IconHighlightsAll';
import FeaturesFirst from './FeaturesFirst';
import FeaturesSecond from './FeaturesSecond';
import FeaturesThird from './FeaturesThird';
import MobileDemo from './MobileDemo';
import Recognitions from './Recognitions';
import { WfhSurveysStyles } from './styles';

function WfhSurveys(props) {
  return (
    <WfhSurveysStyles>
      <section className="section section0">
        <div className="topContainer">
          <FadeIn className="text">
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="Stay connected with your remote"/>
            <Typography variant="h1" fontSizes={[20, 34, 40]} text="workforce with AI-enabled surveys"/>
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h1" text="Enhance engagement and productivity of your remote"/>
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h1" text="employees with simple conversational feedback."/>
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <Button fullWidth name="Schedule Demo" variant="contained" size="large"/>
              </div>
            </Slide>
          </FadeIn>
          <Slide from='right' className="bowlImage">
            <img src="/images/home/mobile.png" />
            <img className="heroBg" src="/images/heroBg.svg" />
            <LottieAnimation dataUrl="/images/wfhSurveys/phone.json" />
          </Slide>
      </div>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Take care of your employees"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="when they need you the most"/>
        </FadeIn>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Make remote working smoother"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="with WFH surveys"/>
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
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Simplest WFH feedback survey"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="to begin with"/>
        </FadeIn>
        <MobileDemo />
      </section>
      <section className="section section6 shortSection">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="We integrate with all the platforms you love"/>
        </FadeIn>
        <Platforms />
      </section>
      <section className="section section7">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Know our extended family"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="300000+ employees across the globe use Leena AI"/>
        </FadeIn>
        <Customers />
      </section>
      <section className="section section8">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Our customers love us"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="for what we do"/>
        </FadeIn>
        <Reviews />
      </section>
      <section className="section section8 noPadding">
        <div className="demoContainer">
          <FadeIn className="quoteContainer">
            <Typography variant="h3" fontSizes={[20, 28, 28]} color="#fff" text="You’re one step away from an excellent employee experience."/>
            <Typography className="" fontWeight="300" color="#fff" fontSizes={[20, 28, 28]} variant="paragraph2" text="Sign up for a free demo right away"/>
          </FadeIn>
          <Slide className="demoInput">
            {/* <Input onChange={() => null} name="schedule" placeholder="Your work email"/> */}
            <Button name="Schedule Demo" variant="inverted" size="large"/>
          </Slide>
        </div>
      </section>
    </WfhSurveysStyles>
  );
}

WfhSurveys.propTypes = {};

export default memo(WfhSurveys);