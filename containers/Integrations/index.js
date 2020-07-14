/**
 *
 * Integrations
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Typography from '../../components/Typography';
import Input from '../../components/Input';
import Reviews from '../../components/Reviews';
import ScheduleDemo from '../../components/ScheduleDemo';
import ScheduleDemoButton from '../../components/ScheduleDemoButton';
import FadeIn from '../../components/VisibilitySensor/FadeIn';
import Slide from '../../components/VisibilitySensor/Slide';
import LottieAnimation from "../../components/LottieAnimation";

import { IntegrationsStyles } from './styles';

const social = ['workplace', 'slack', 'teams', 'whatsapp', 'android', 'ios', 'twilio', 'sip', 'outlook', 'facebook', 'windows', 'mac'];
const enterprise = ['sap', 'oracle', 'workday', 'kronos', 'adp', 'darwin', 'peopleSoft'];
const services = ['sheets', 'oneDrive', 'box', 'calender', 'office', 'sharePoint'];
const tickets = ['bmc', 'summit', 'serviceNow'];

function Integrations(props) {
  return (
    <IntegrationsStyles>
      <section className="section section0">
        <div className="bg" />
        <div className="topContainer">
          <FadeIn className="text desktop">
            <Typography className="topText" variant="h1" fontSizes={[28, 44, 40]} text="Bring it where you are"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="Leena AI integrates with all the platforms"/>
            <br />
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="your workforce loves."/>
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <ScheduleDemoButton type="link" fullWidth name="Schedule demo" variant="contained" size="large"/>
              </div>
            </Slide>
          </FadeIn>
          <FadeIn className="text mobile">
            <Typography className="topText" variant="h1" fontSizes={[28, 44, 40]} text="Bring it where you are"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="Leena AI integrates with all the"/>
            <br />
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="platforms your workforce loves."/>
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <ScheduleDemoButton type="link" fullWidth name="Schedule demo" variant="contained" size="large"/>
              </div>
            </Slide>
          </FadeIn>
          <Slide from='right' className="bowlImage">
            <img alt="Leena AI integrations" src="/images/integrations/headerImage.png" />
          </Slide>
      </div>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography className="highlight desktop" variant="h3" fontSizes={[20, 28, 28]} text="Manage all employee queries at one place"/>
          <Typography className="highlight mobile" variant="h3" fontSizes={[20, 28, 28]} text="Manage all employee queries"/>
          <Typography className="highlight mobile marginBot" variant="h3" fontSizes={[20, 28, 28]} text="at one place"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 18, 18]} variant="paragraph2" text="Make it simple for your employees to give feedback with easy-to-use AI-powered conversations. Eliminate the hassle of poor user interface and long feedback forms."/>
        </FadeIn>
        <div className="social icons">
          {social.map( social => 
            <div className="icon" key={social}>
              <img alt={`Leena AI integration with ${social}`} src={`/images/integrations/social/${social.indexOf('.') > -1 ? social : (social + '.png')}`} />
            </div>
          )}
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography className="highlight desktop" variant="h3" fontSizes={[20, 28, 28]} text="Carry out automated contextual conversation"/>
          <Typography className="highlight mobile" variant="h3" fontSizes={[20, 28, 28]} text="Carry out automated"/>
          <Typography className="highlight mobile marginBot" variant="h3" fontSizes={[20, 28, 28]} text="contextual conversation"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 18, 18]} variant="paragraph2" text="Our conversational AI works in sync with your HRIS system. Thus, it makes it easy for your employees to access personal information like salary slips, and tax deductions via enterprise conversations."/>
        </FadeIn>
        <div className="social icons">
          {enterprise.map( enterprise => 
            <div className="icon" key={enterprise}>
              <img alt={`Leena AI integration with ${enterprise}`} src={`/images/integrations/enterprise/${enterprise.indexOf('.') > -1 ? enterprise : (enterprise + '.png')}`} />
            </div>
          )}
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography className="highlight desktop" variant="h3" fontSizes={[20, 28, 28]} text="Bring together all the information your employees need"/>
          <Typography className="highlight mobile" variant="h3" fontSizes={[20, 28, 28]} text="Bring together all the"/>
          <Typography className="highlight mobile" variant="h3" fontSizes={[20, 28, 28]} text="information your"/>
          <Typography className="highlight mobile marginBot" variant="h3" fontSizes={[20, 28, 28]} text="employees need"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 18, 18]} variant="paragraph2" text="Enable your employees to access and sync all the information from third-party applications directly within enterprise conversational AI."/>
        </FadeIn>
        <div className="social icons">
          {services.map( service => 
            <div className="icon" key={service}>
              <img alt={`Leena AI integration with ${social}`} src={`/images/integrations/services/${service.indexOf('.') > -1 ? service : (service + '.png')}`} />
            </div>
          )}
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography className="highlight desktop" variant="h3" fontSizes={[20, 28, 28]} text="Move your tickets wherever you want to"/>
          <Typography className="highlight mobile" variant="h3" fontSizes={[20, 28, 28]} text="Move your tickets"/>
          <Typography className="highlight mobile marginBot" variant="h3" fontSizes={[20, 28, 28]} text="wherever you want to"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 18, 18]} variant="paragraph2" text="If you want to move your tickets out of Leena AI and collaborate with other departments, we handle it with complete efficiency."/>
        </FadeIn>
        <div className="social icons tickets">
          {tickets.map( ticket => 
            <div className="icon" key={ticket}>
              <img alt={`Leena AI integration with ${social}`} src={`/images/integrations/tickets/${ticket.indexOf('.') > -1 ? ticket : (ticket + '.png')}`} />
            </div>
          )}
        </div>
      </section>
      <section className="section section8 noMargin">
        <ScheduleDemo variant="oneStep" />
      </section>
    </IntegrationsStyles>
  );
}

Integrations.propTypes = {};

export default memo(Integrations);