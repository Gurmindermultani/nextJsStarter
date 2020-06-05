/**
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "react-visibility-sensor";
import { throttle, debounce } from 'lodash';

import Button from '../../components/Button';
import Typography from '../../components/Typography';
import Input from '../../components/Input';

import IconHighlightsAll from './IconHighlightsAll';
import ProductHr from './ProductHr';
import EmployeeExperience from './EmployeeExperience';
import MobileDemo from './MobileDemo';
import Platforms from './Platforms';
import Customers from './Customers';
import Reviews from './Reviews';
import Recognitions from './Recognitions';
import { HomePageStyles } from './styles';
import TopContainer from './TopContainer';

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

function scrollTo(element, to, duration = 1000) {
  var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

  console.log(to, duration);
      
  var animateScroll = function(){        
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      console.log(currentTime);
      element.scrollTop = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}
let currentSection = 0;

function QuoteAnimator (props) {
  return (
    <VisibilitySensor partialVisibility>
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
    window.scrollTo(0, 0);
    window.addEventListener('wheel', throttle(doSomething, 1000, { trailing: true, leading: false }));
    return () => {
      window.removeEventListener('wheel', function(e) {
        console.log('remved');
      });
    }
  },[]);
  return (
    <HomePageStyles>
      <section className="section section0">
        <TopContainer />
      </section>
      <section className="section section1">
        <QuoteAnimator>
          <Typography variant="h3" fontSize="28px" text="Empower your organization"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="with an excellent HR efficiency"/>
        </QuoteAnimator>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2">
        <QuoteAnimator>
          <Typography variant="h3" fontSize="28px" text="Make employee service as smooth as"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="your customer service"/>
        </QuoteAnimator>
        <div className="products">
          <ProductHr heading="HR helpdesk" description="Take a step ahead to make your workplace happier. Let the virtual HR assistant be available for your employees round the clock."/>
        </div>
      </section>
      <section className="section section3">
        <div className="products">
          <EmployeeExperience heading="Employee experience" description="Know the pulse of your employees by accessing their motivation and challenges through periodic conversational surveys."/>  
        </div>
      </section>
      <section className="section section4">
        <QuoteAnimator>
          <Typography variant="h3" fontSize="28px" text="It’s simpler than you think"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="A complete helpdesk that your employee needs"/>
        </QuoteAnimator>
        <MobileDemo />
      </section>
      <section className="section section5">
        <QuoteAnimator>
          <Typography variant="h3" fontSize="28px" text="Bring it where you are"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="We integrate with all the platforms you love"/>
        </QuoteAnimator>
        <Platforms />
      </section>
      <section className="section section6">
        <QuoteAnimator className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Know our extended family"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="300000+ employees across the globe use Leena AI"/>
        </QuoteAnimator>
        <Customers />
      </section>
      <section className="section section7">
        <QuoteAnimator className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Our customers love us"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="for what we do"/>
        </QuoteAnimator>
        <Reviews />
      </section>
      <section className="section section8">
        <div className="quoteContainer demoContainer">
          <QuoteAnimator>
            <Typography variant="h3" fontSize="28px" text="Schedule your free demo"/>
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="right away"/>
          </QuoteAnimator>
          <div className="demoInput">
            <Input onChange={() => null} name="schedule" placeholder="Your work email"/>
            <Button name="Schedule Demo" variant="contained" size="large"/>
          </div>
        </div>
      </section>
      <section className="section section9">
        <QuoteAnimator className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Industry recognition"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="for our expertise in HR"/>
        </QuoteAnimator>
        <Recognitions />
      </section>
    </HomePageStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);