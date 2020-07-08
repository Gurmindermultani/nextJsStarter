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
import FadeIn from '../../components/VisibilitySensor/FadeIn';
import Slide from '../../components/VisibilitySensor/Slide';
import LottieAnimation from "../../components/LottieAnimation";

import { IntegrationsStyles } from './styles';

const social = ['workplace', 'slack', 'teams', 'whatsapp', 'android', 'ios', 'twilio', 'sip', 'web.svg', 'facebook', 'windows', 'mac'];
const enterprise = ['sap', 'oracle', 'workday', 'kronos', 'adp', 'darwin'];
const services = ['sheets', 'oneDrive', 'box', 'calender', 'office', 'sharePoint'];
const tickets = ['bmc', 'summit', 'serviceNow'];

function Integrations(props) {
  return (
    <IntegrationsStyles>
      <section className="section section0">
        <div className="bg" />
        <div className="topContainer">
          <FadeIn className="text">
            <Typography className="topText" variant="h1" fontSizes={[28, 44, 40]} text="Bring it where you are"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="Leena AI integrates with all the platforms"/>
            <br />
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="your workforce loves."/>
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <Button fullWidth name="Schedule demo" variant="contained" size="large"/>
              </div>
            </Slide>
          </FadeIn>
          <Slide from='right' className="bowlImage">
            <img src="/images/integrations/headerImage.png" />
          </Slide>
      </div>
      </section>
      <section className="section section1">
        <FadeIn className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Manage all employee queries at one place"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 18, 18]} variant="paragraph2" text="Make it simple for your employees to give feedback with easy-to-use AI-powered conversations. Eliminate the hassle of poor user interface and long feedback forms."/>
        </FadeIn>
        <div className="social icons">
          {social.map( social => 
            <div className="icon" key={social}>
              <img alt="" src={`/images/integrations/social/${social.indexOf('.') > -1 ? social : (social + '.png')}`} />
            </div>
          )}
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Carry out automated contextual conversation"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 18, 18]} variant="paragraph2" text="Our conversational AI works in sync with your HRIS system. Thus, it makes it easy for your employees to access personal information like salary slips, and tax deductions via enterprise conversations."/>
        </FadeIn>
        <div className="social icons">
          {enterprise.map( enterprise => 
            <div className="icon" key={enterprise}>
              <img alt="" src={`/images/integrations/enterprise/${enterprise.indexOf('.') > -1 ? enterprise : (enterprise + '.png')}`} />
            </div>
          )}
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Bring together all the information your employees need"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 18, 18]} variant="paragraph2" text="Enable your employees to access and sync all the information from third-party applications directly within enterprise conversational AI."/>
        </FadeIn>
        <div className="social icons">
          {services.map( services => 
            <div className="icon" key={services}>
              <img alt="" src={`/images/integrations/services/${services.indexOf('.') > -1 ? services : (services + '.png')}`} />
            </div>
          )}
        </div>
      </section>
      <section className="section section2">
        <FadeIn className="quoteContainer">
          <Typography className="highlight" variant="h3" fontSizes={[20, 28, 28]} text="Move your tickets wherever you want to"/>
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 18, 18]} variant="paragraph2" text="If you want to move your tickets out of Leena AI and collaborate with other departments, we handle it with complete efficiency."/>
        </FadeIn>
        <div className="social icons tickets">
          {tickets.map( tickets => 
            <div className="icon" key={tickets}>
              <img alt="" src={`/images/integrations/tickets/${tickets.indexOf('.') > -1 ? tickets : (tickets + '.png')}`} />
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