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

import IconHighlightsAll from './IconHighlightsAll';
import ProductHr from './ProductHr';
import ProductMore from './ProductMore';
import MobileDemo from './MobileDemo';
import MacDemo from './MacDemo';
import { EngagementStyles } from './styles';

function Engagement(props) {
  return (
    <EngagementStyles>
      <section className="section section0">
        <div className="topContainer">
          <FadeIn className="text">
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="Build a world-class company culture"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="Get real-time actionable insights with AI-driven"/>
            <br />
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="employee engagement surveys."/>
            <br />
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
            <LottieAnimation dataUrl="/images/engage/phone.json" />
          </Slide>
      </div>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Boost organizational happiness"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="with outstanding employee experience"/>
        </FadeIn>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Discover your path"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="to excellent employee engagement"/>
        </FadeIn>
        <div className="products">
          <ProductHr />
        </div>
        <div className="products">
          <ProductMore />
        </div>
      </section>
      <section className="section section3">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Employee engagement"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="can’t be any simpler"/>
        </FadeIn>
        <MobileDemo />
      </section>
      <section className="section section4">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Enhance employee performance"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="with real-time engagement metrics"/>
        </FadeIn>
        <MacDemo />
      </section>
      <section className="section section5 shortSection">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="We integrate with all the platforms you love"/>
        </FadeIn>
        <Platforms />
      </section>
      <section className="section section6">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Know our extended family"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="300000+ employees across the globe use Leena AI"/>
        </FadeIn>
        <Customers />
      </section>
      <section className="section section7">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Our customers love us"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="for what we do"/>
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