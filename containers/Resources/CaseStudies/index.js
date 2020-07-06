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
import ScheduleDemo from '../../../components/ScheduleDemo';
import FadeIn from '../../../components/VisibilitySensor/FadeIn';
import Slide from '../../../components/VisibilitySensor/Slide';
import { CaseStudiesStyles } from './styles';
import { Card } from '@material-ui/core';

const allCaseStudies = [
  {
    name: 'airasia',
    text: 'AirAsia transforms employee query resolution with Leena AI',
    img: '/images/clients/airasia.png',
    link: '/airasia-employee-query-resolution',
  },
];

function CaseStudies(props) {
  return (
    <CaseStudiesStyles>
      <section className="section section0">
        <div className="topContainer">
          <FadeIn className="text desktop">
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="Customer stories that speak volumes"/>
            <br />
            <Typography className="highlight secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="Explore these case studies to see real results and ROI"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="our customers derived from us"/>
          </FadeIn>
          <FadeIn className="text mobile">
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="Customer stories"/>
            <br />
            <Typography className="topText" variant="h1" fontSizes={[20, 34, 40]} text="that speak volumes"/>
            <br />
            <Typography className="highlight secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="Explore these case studies to see real results and ROI our customers derived from us"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text=""/>
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
      <section className="section section8 noPadding">
        <ScheduleDemo variant="knowHow"></ScheduleDemo>
      </section>
    </CaseStudiesStyles>
  );
}

CaseStudies.propTypes = {};

export default memo(CaseStudies);