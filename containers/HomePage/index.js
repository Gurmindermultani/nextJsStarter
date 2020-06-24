/**
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "../../components/VisibilitySensor";
import Slide from "../../components/VisibilitySensor/Slide";
import { throttle, debounce } from 'lodash';

import Button from '../../components/Button';
import Typography from '../../components/Typography';
import Input from '../../components/Input';
import Customers from '../../components/Customers';
import Reviews from '../../components/Reviews';
import MobileDemo from '../../components/MobileDemo';
import Platforms from '../../components/Platforms';
import ScheduleDemo from '../../components/ScheduleDemo';

import IconHighlightsAll from './IconHighlightsAll';
import ProductHr from './ProductHr';
import EmployeeExperience from './EmployeeExperience';
import Recognitions from './Recognitions';
import { HomePageStyles } from './styles';
import TopContainer from './TopContainer';

const mobileSlides = [
  {
    heading: "Conversational interface",
    text: "Employees chat with the virtual HR assistant."
  },
  {
    heading: "Automated replies",
    text: "They get quick automated replies to their queries.",
  },
  {
    heading: "Real-time ticketing",
    text: "There’s an option to raise tickets when needed.",
  },
  {
    heading: "Employee self-service",
    text: "Employees also submit their leave request via chat.",
  },
];

function QuoteAnimator (props) {
  return (
    <VisibilitySensor once partialVisibility>
      {({ isVisible }) => (
        <Spring delay={500} to={{ 
          opacity: isVisible ? 1 : 0,
        }}>
          {({ opacity }) => (
            <div style={ { opacity} } className="quoteContainer">
              {props.children}
            </div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
}

function HomePage(props) {
  const goDown = () => {
    currentSection += 1;
    try {
      document.querySelector('.section' + (currentSection)).scrollIntoView({behavior: "smooth"}); 
    } catch (error) {
      console.log(error);
    }
  };
  const goUp = () => {
    currentSection -= 1;
    if (currentSection < 0) {
      currentSection = 0;
    }
    try {
      document.querySelector('.section' + (currentSection)).scrollIntoView({behavior: "smooth"}); 
    } catch (error) {
      console.log(error);
    }
  };
  const doSomething = (e) => {
    // Do something with the scroll position
    e.preventDefault();
    if (e.deltaY > 0){
        // downscroll code
        goDown();
    } else if (e.deltaY < 0){
        // upscroll code
        goUp();
    }
  }
  useEffect(() => {
    // window.scrollTo(0, 0);
    // window.addEventListener('wheel', throttle(doSomething, 1000, { trailing: true, leading: false }));
    // return () => {
    //   window.removeEventListener('wheel', function(e) {
    //     console.log('remved');
    //   });
    // }
  },[]);
  return (
    <HomePageStyles>
      <section className="section section0">
        <TopContainer />
      </section>
      <section className="section section1">
        <QuoteAnimator>
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Empower your organization"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="with an excellent HR efficiency"/>
        </QuoteAnimator>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2">
        <QuoteAnimator>
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Make employee service as smooth as"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="your customer service"/>
        </QuoteAnimator>
        <div className="products">
          <ProductHr heading="HR helpdesk" description="Take a step ahead to make your workplace happier. Let the virtual HR assistant be available for your employees round the clock."/>
        </div>
      </section>
      <section className="section section3">
        <div className="products">
          <EmployeeExperience heading="Employee engagement" description="Know the pulse of your employees by accessing their motivation and challenges through periodic conversational surveys."/>  
        </div>
      </section>
      <section className="section section4 noMargin">
        <div className="mobile">
          <QuoteAnimator>
            <Typography variant="h3" fontSizes={[20, 28, 28]} text="It’s simpler than you think"/>
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="A complete helpdesk that your employee needs"/>
          </QuoteAnimator>
        </div>
        <MobileDemo phoneJson="/images/home/phone.json" slides={mobileSlides} quote={{ heading1: "It’s simpler", heading2: "than you think", text: "A complete helpdesk that your employee needs" }} />
      </section>
      <section className="section section5">
        <QuoteAnimator>
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Bring it where you are"/>
          <Typography className="halfBackground highlight" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="We integrate with all the platforms you love"/>
        </QuoteAnimator>
        <Platforms />
        <div className="knowMore center">
          <Button variant="contained" size="large" name="Know More" />
        </div>
      </section>
      <section className="section section6">
        <QuoteAnimator className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Know our extended family"/>
          <Typography className="halfBackground highlight" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="300000+ employees across the globe use Leena AI"/>
        </QuoteAnimator>
        <Customers />
      </section>
      <section className="section section7">
        <QuoteAnimator className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Our customers love us"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="for what we do"/>
        </QuoteAnimator>
        <Reviews />
      </section>
      <section className="section section8 noMargin">
        <ScheduleDemo></ScheduleDemo>
      </section>
      <section className="section section9">
        <QuoteAnimator className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="We’re featured in"/>
        </QuoteAnimator>
        <Recognitions />
      </section>
    </HomePageStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);