/**
 *
 * ContactUs
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link'

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Input from '../../../components/Input';
import Customers from '../../../components/Customers';
import ScheduleDemo from '../../../components/ScheduleDemo';
import FadeIn from '../../../components/VisibilitySensor/FadeIn';
import Slide from '../../../components/VisibilitySensor/Slide';

import { AboutUsStyles } from './styles';

function ContactUs(props) {
  return (
    <AboutUsStyles>
      <section className="section section0">
        <Slide from='left' className="leftContainer">
          <Typography variant="h3" fontSizes={[20, 24, 30]} text="We help enterprises transform employee experience with conversational AI"/>
          <br />
          <Typography className="para first" variant="h3" fontWeight="300" fontSizes={[16, 18, 20]} text="We are on the mission of making work easy for enterprises with the help of artificial intelligence. We build AI-enabled conversational solutions that help enterprises automate employee queries, enhance employee experience and ensure maximum employee engagement."/>
          <br />
          <Typography className="para" variant="h3" fontWeight="300" fontSizes={[16, 18, 20]} text="Our services help the HR teams automate and streamline day-to-day HR operations like answering policy-related employee queries, resolving employee tickets, and managing employee requests on the go using AI."/>
          <br />
          <Typography className="para" variant="h3" fontWeight="300" fontSizes={[16, 18, 20]} text="We also deliver employee engagement solutions that give HRs real-time actionable insights to increase employee engagement and ensure employee satisfaction."/>
          <br />
          <Typography className="para" variant="h3" fontWeight="300" fontSizes={[16, 18, 20]} text="We have just the right expertise when it comes to delivering conversational AI solutions in the HR domain, and we are already working towards expanding our proficiency in other domains as well."/>
          <br />
          <Typography className="para" variant="h3" fontWeight="300" fontSizes={[16, 18, 20]} text="Today, more than 300000 employees use Leena AI to make their day-to-day life easier. Enterprises across various sectors like automobiles, pharmaceutical, aviation, manufacturing, FMCG, telecommunications, information technology are using Leena AI."/>
        </Slide>
        <Slide from='right' className="rightContainer">
          <img alt="rocket image" src="/images/about-us.svg" />
        </Slide>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Know our extended family"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="paragraph2" text="300000+ employees across the globe use Leena AI"/>
        </FadeIn>
        <Customers />
      </section>
      <section className="section section2 noMargin">
        <ScheduleDemo variant="discover"></ScheduleDemo>
      </section>
    </AboutUsStyles>
  );
}

ContactUs.propTypes = {};

export default memo(ContactUs);