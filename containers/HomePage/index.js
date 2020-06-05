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
import DetailProducts from './DetailProducts';
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
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring delay={500} to={{ 
              opacity: isVisible ? 1 : 0,
            }}>
              {({ opacity }) => (
                <div style={ { opacity} } className="quoteContainer">
                  <Typography variant="h3" fontSize="28px" text="Empower your organization"/>
                  <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="with an excellent HR efficiency"/>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section>
      <section className="section section2">
        <div className="quoteContainer">
          <Typography variant="h3" fontSize="28px" text="Make employee service as smooth as"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="your customer service"/>
        </div>
        <div className="products">
          <DetailProducts />
        </div>
      </section>
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="It’s simpler than you think"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="A complete helpdesk that your employee needs"/>
      </div>
      <MobileDemo />
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Bring it where you are"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="We integrate with all the platforms you love"/>
      </div>
      <Platforms />
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Know our extended family"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="300000+ employees across the globe use Leena AI"/>
      </div>
      <Customers />
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Our customers love us"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="for what we do"/>
      </div>
      <Reviews />
      <div className="quoteContainer demoContainer">
        <Typography variant="h3" fontSize="28px" text="Schedule your free demo"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="right away"/>
        <div className="demoInput">
          <Input onChange={() => null} name="schedule" placeholder="Your work email"/>
          <Button name="Schedule Demo" variant="contained" size="large"/>
        </div>
      </div>
      <div className="quoteContainer">
        <Typography variant="h3" fontSize="28px" text="Industry recognition"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="for our expertise in HR"/>
      </div>
      <Recognitions />
    </HomePageStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);