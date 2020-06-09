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
import MobileDemo from './MobileDemo';
import MacDemo from './MacDemo';
import Recognitions from './Recognitions';
import { EngagementStyles } from './styles';

function Engagement(props) {
  return (
    <EngagementStyles>
      <section className="section section0 shortSection">
        <div className="topContainer">
          <FadeIn className="text">
            <Typography className="topText" variant="h1" fontSize="64px" text="Build a world-class"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSize="64px" variant="paragraph2" text="company culture"/>
            <Slide className="demoInput">
              <Input name="schedule" placeholder="Your work email"/>
              <Button name="Schedule Demo" variant="contained" size="large"/>
            </Slide>
          </FadeIn>
      </div>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Boost organizational happiness"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="with outstanding employee experience"/>
        </FadeIn>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Discover your path"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="to excellent employee engagement"/>
        </FadeIn>
        <div className="products">
          <ProductHr heading="HR helpdesk" description="Take a step ahead to make your workplace happier. Let the virtual HR assistant be available for your employees round the clock."/>
        </div>
      </section>
      <section className="section section3">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Employee engagement"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="can’t be any simpler"/>
        </FadeIn>
        <MobileDemo />
      </section>
      <section className="section section4">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Enhance employee performance"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="with real-time engagement metrics"/>
        </FadeIn>
        <MacDemo />
      </section>
      <section className="section section5 shortSection">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="We integrate with all the platforms you love"/>
        </FadeIn>
        <Platforms />
      </section>
      <section className="section section6">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="We integrate with all the platforms you love"/>
        </FadeIn>
        <Customers />
      </section>
      <section className="section section7">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="We integrate with all the platforms you love"/>
        </FadeIn>
        <Reviews />
      </section>
      <section className="section section8 demoSecion">
        <ScheduleDemo />
      </section>
    </EngagementStyles>
  );
}

Engagement.propTypes = {};

export default memo(Engagement);