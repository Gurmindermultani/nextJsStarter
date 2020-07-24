/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import Slide from "../../components/VisibilitySensor/Slide";
import VisibilitySensor from "../../components/VisibilitySensor";

import Typography from '../../components/Typography';
// import Customers from '../../components/Customers';
// import Reviews from '../../components/Reviews';
import MobileDemo from '../../components/MobileDemo';
import Platforms from '../../components/Platforms';
import KnowMore from '../../components/KnowMore';
import ScheduleDemo from '../../components/ScheduleDemo';

// import IconHighlightsAll from './IconHighlightsAll';
import ProductHr from './ProductHr';
import EmployeeExperience from './EmployeeExperience';
// import Recognitions from './Recognitions';
import { HomePageStyles } from './styles';
import TopContainer from './TopContainer';

const mobileSlides = [
  {
    heading: "Conversational interface",
    text: "Employees can chat with the virtual HR assistant."
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
    <Slide className="quoteContainer">
      {props.children}
    </Slide>
  );
}

function HomePage(props) {
  return (
    <HomePageStyles>
      <section className="section section0">
        <TopContainer />
      </section>
      {/* <section className="section section1">
        <QuoteAnimator>
          <Typography className="" variant="h3" fontSizes={[20, 28, 28]} text="Empower your organization"/>
          <Typography className="halfBackground highlight" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="with an excellent HR efficiency"/>
        </QuoteAnimator>
        <div className="iconHighlightsContainer">
          <IconHighlightsAll></IconHighlightsAll>
        </div>
      </section> */}
      <section className="section section2">
        <QuoteAnimator>
          <Typography className="highlight desktop" variant="h3" fontSizes={[20, 28, 28]} text="Make employee service as smooth as"/>
          <>
            <Typography className="highlight mobile" variant="h3" fontSizes={[20, 28, 28]} text="Make employee service"/>
            <Typography className="highlight mobile" variant="h3" fontSizes={[20, 28, 28]} text="as smooth as"/>
          </>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="your customer service"/>
        </QuoteAnimator>
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <div className="products">
              {isVisible &&
                <ProductHr heading="HR helpdesk" description="Take a step ahead to make your workplace happier. Let the virtual HR assistant be available for your employees round the clock."/>
              }
            </div>
          )}
        </VisibilitySensor>
      </section>
      <section className="section section3">
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <div className="products">
              {isVisible &&
                <EmployeeExperience heading="Employee engagement" description="Know the pulse of your employees by accessing their motivation and challenges through periodic conversational surveys."/>  
              }
            </div>
          )}
        </VisibilitySensor>
      </section>
      <section className="section section4 noMargin">
        <div className="mobile">
          <QuoteAnimator>
            <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="It’s simpler than you think"/>
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="A complete helpdesk that your employee needs"/>
          </QuoteAnimator>
        </div>
        <MobileDemo className="homePageMobileDemo" alt="Hr helpdesk" phoneJson="/images/home/phone.json" slides={mobileSlides} quote={{ heading1: "It’s simpler", heading2: "than you think", text: "A complete helpdesk that your employee needs" }} />
      </section>
      <section className="section section5">
        <QuoteAnimator>
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Bring it where you are"/>
          <Typography className="halfBackground highlight desktop" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="We integrate with all the platforms you love"/>
          <Typography className="halfBackground highlight mobile" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="We integrate with all"/>
          <Typography className="halfBackground highlight mobile" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="the platforms you love"/>
        </QuoteAnimator>
        <Platforms />
        <div className="knowMore center">
          <KnowMore />
        </div>
      </section>
      {/* <section className="section section6">
        <QuoteAnimator className="quoteContainer">
          <Typography variant="h3" fontSizes={[20, 28, 28]} text="Know our extended family"/>
          <Typography className="halfBackground highlight desktop" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="300000+ employees across the globe use Leena AI"/>
          <Typography className="halfBackground highlight mobile" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="300000+ employees"/>
          <Typography className="halfBackground highlight mobile" fontWeight="300" color="#212121" fontSizes={[20, 28, 28]} variant="h1" text="across the globe use Leena AI"/>
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
      <section className="section section8">
        <QuoteAnimator className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="We’re featured in"/>
        </QuoteAnimator>
        <Recognitions />
      </section> */}
      <section className="section section9 noMargin">
        <ScheduleDemo className="homePageCta" variant="discover"></ScheduleDemo>
      </section>
    </HomePageStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);