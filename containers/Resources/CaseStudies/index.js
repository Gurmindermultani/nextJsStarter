/**
 *
 * CaseStudies
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Input from '../../../components/Input';
import Cards from '../../../components/Cards';
import FadeIn from '../../../components/VisibilitySensor/FadeIn';
import Slide from '../../../components/VisibilitySensor/Slide';
import { CaseStudiesStyles } from './styles';
import { Card } from '@material-ui/core';

const allCaseStudies = [
  {
    name: 'airasia',
    text: 'AirAsia transforms employee query resolution with Leena AI',
    img: '/images/clients/airasia.png',
  },
  {
    name: 'cocacola',
    text: 'AirAsia transforms employee query resolution with Leena AI',
    img: '/images/clients/cocacola.png',
  },
  {
    name: 'lafarge',
    text: 'AirAsia transforms employee query resolution with Leena AI',
    img: '/images/clients/lafarge.png',
  },
  {
    name: 'lafarge',
    text: 'AirAsia transforms employee query resolution with Leena AI',
    img: '/images/clients/lafarge.png',
  },
  {
    name: 'lafarge',
    text: 'AirAsia transforms employee query resolution with Leena AI',
    img: '/images/clients/lafarge.png',
  },
];

function CaseStudies(props) {
  return (
    <CaseStudiesStyles>
      <section className="section section0">
        <div className="topContainer">
          <FadeIn className="text">
            <Typography className="topText" variant="h1" fontSize="52px" text="Customer stories that speak volumes"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSize="22px" variant="paragraph2" text="Explore these case studies to see real results and ROI"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSize="22px" variant="paragraph2" text="our customers derived from us"/>
          </FadeIn>
      </div>
      </section>
      <section className="section section1">
        {allCaseStudies.map( (caseStudy, idx) =>
          <Slide delay={idx*100} key={caseStudy.name} className="slideCard">
            <Cards variant="buttonLink" data={caseStudy} />
          </Slide>
        )}
      </section>
      <section className="section section8 shortSection noPadding">
        <div className="quoteContainer demoContainer">
          <FadeIn className="quoteContainer">
            <Typography variant="h3" fontSize="28px" color="#fff" text="Know how Leena AI can add value"/>
            <Typography className="halfBackground" fontWeight="300" color="#fff" fontSize="28px" variant="paragraph2" text="to your organization."/>
          </FadeIn>
          <Slide className="demoInput">
            <Input onChange={() => null} name="schedule" placeholder="Your work email"/>
            <Button name="Schedule Demo" variant="inverted" size="large"/>
          </Slide>
        </div>
      </section>
    </CaseStudiesStyles>
  );
}

CaseStudies.propTypes = {};

export default memo(CaseStudies);