/**
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link'

import Typography from '../../components/Typography';
import Slide from '../../components/VisibilitySensor/Slide';

import { ScheduleDemoStyles } from './styles';
import Form from './Form';

function HomePage(props) {
  return (
    <ScheduleDemoStyles>
      <Slide from='left' className="leftContainer">
        <div className="textCenter">
          <Typography className="demoText" variant="h1" fontSizes={[24, 44, 48]} text="Book your live demo"/>
        </div>
        <div className="textCenter">
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[16, 18, 22]} variant="h1" text="Discover how Leena AI can help you transform"/>
        </div>
        <div className="textCenter">
          <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[16, 18, 22]} variant="h1" text="your employee experience."/>
        </div>
        <div className="rightContainer mobile">
          <Form />
        </div>
        <Typography className="textDetail" fontWeight="500" color="#212121" fontSizes={[14, 14, 18]} variant="h1" text="In the demo session, our product consultants will walk you through the conversational AI platform, analytical dashboards, and how Leena AI can help you resolve your challenges."/>
        {/* <div className="clients">
          {clients.map( client => 
            <img key={client} className={'client ' + client} alt={'client ' + client} src={`/images/clients/${client}.png`}/>
          )} 
        </div>      */}
        <div className="lower">
          <Typography fontSizes={[14, 14, 18]} variant="paragraph2" color="#0F72EE" text="Get insights about how Leena AI can help you with:"/>
          <ul>
            <li>
              <Typography fontSizes={[14, 14, 18]} variant="paragraphS2" fontWeight="300" color="#212121" text="Automatic resolution of employee queries"/>
            </li>
            <li>
              <Typography fontSizes={[14, 14, 18]} variant="paragraphS2" fontWeight="300" color="#212121" text="Streamlining HR workflows"/>
            </li>
            <li>
              <Typography fontSizes={[14, 14, 18]} variant="paragraphS2" fontWeight="300" color="#212121" text="Enhancing employee engagement"/>
            </li>
          </ul>
        </div>
      </Slide>
      <Slide from='right' className="rightContainer desktop">
        <Form />
      </Slide>
    </ScheduleDemoStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);