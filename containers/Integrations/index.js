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

const social = ['workplace'];

function Integrations(props) {
  return (
    <IntegrationsStyles>
      <section className="section section0">
        <div className="topContainer">
          <FadeIn className="text">
            <Typography className="topText" variant="h1" fontSizes={[20, 44, 40]} text="Bring it where you are"/>
            <br />
            <Typography className="secondHeading halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="Leena AI integrates with all the platforms"/>
            <br />
            <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[18, 20, 22]} variant="paragraph2" text="your workforce loves."/>
            <Slide className="demoInput">
              {/* <Input className="fullWidth" name="schedule" placeholder="Your work email"/> */}
              <div className="buttons">
                <Button fullWidth name="Schedule Demo" variant="contained" size="large"/>
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
              <img alt="" src={`/images/integrations/social/${social}.png`} />
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