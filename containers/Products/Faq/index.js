/**
 *
 * Faq
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
import { FaqStyles } from './styles';

function Faq(props) {
  return (
    <FaqStyles>
      <section className="section section0">
        <div className="topContainer">
          <FadeIn className="text desktop">
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="Answer your employee queries"/>
            <br />
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="with enterprise conversational experience"/>
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text="Automatically reply policy-related HR queries"/>
            <br />
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text="instantly via AI-driven conversations."/>
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <ScheduleDemoButton fullWidth type="link"/>
              </div>
            </Slide>
          </FadeIn>
          <FadeIn className="text mobile">
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 34]} text="Answer your"/>
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 34]} text="employee queries instantly"/>
            <Typography variant="h1" fontSizes={[20, 34, 34]} text="with enterprise conversational experience"/>
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="h2" text="Automatically reply policy-related HR queries instantly via AI-driven conversations."/>
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <ScheduleDemoButton fullWidth type="link"/>
              </div>
            </Slide>
          </FadeIn>
          <Slide from='right' className="bowlImage">
            <img src="/images/home/mobile.png" />
            <img className="heroBg" src="/images/heroBg.svg" />
            <LottieAnimation dataUrl="/images/faq/phone.json" />
          </Slide>
      </div>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Exhibit the power of"/>
          <Typography className="highlight halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="outstanding employee service"/>
        </FadeIn>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2 desktop">
        <FadeIn className="quoteContainer">
          <Typography className="" variant="h3" fontSizes={[20, 28, 28]} text="Capabilities that help you build"/>
          <Typography className="halfBackground highlight" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="an employee-friendly workplace"/>
        </FadeIn>
        <FeaturesFirst></FeaturesFirst>
      </section>
      <section className="section section3 desktop">
        <FeaturesSecond />
      </section>
      <section className="section section3 desktop">
        <FeaturesThird />
      </section>
      <section className="section section2 mobile">
        <FadeIn className="quoteContainer">
          <Typography className="" variant="h3" fontSizes={[20, 28, 28]} text="Capabilities that help you build"/>
          <Typography className="halfBackground highlight" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="an employee-friendly workplace"/>
        </FadeIn>
        <MobileFeatures />
      </section>
      <section className="section buttonSection">
        <ScheduleDemoButton />
      </section>
      <section className="section section5">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Bring it where you are"/>
          <Typography className="highlight halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h2" text="We integrate with all the platforms you love"/>
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
    </FaqStyles>
  );
}

Faq.propTypes = {};

export default memo(Faq);