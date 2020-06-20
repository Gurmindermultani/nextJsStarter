/**
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link'

import Button from '../../components/Button';
import Typography from '../../components/Typography';
import Input from '../../components/Input';
import { useForm, useField } from '../../components/Input/formHooks';
import Utils from '../../utils';

import { ScheduleDemoStyles } from './styles';
import Form from './Form';

const clients = ['lafarge', 'oneplus', 'cocacola', 'airasia', 'tata', 'sony', 'vodafone'];

function HomePage(props) {
  return (
    <ScheduleDemoStyles>
      <div className="leftContainer">
        <Typography className="demoText" variant="h1" fontSizes={[20, 34, 40]} text="Book your live demo"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[16, 18, 20]} variant="h1" text="Discover how Leena AI can help you transform"/>
        <br />
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSizes={[16, 18, 20]} variant="h1" text="your employee experience."/>
        <br />
        <Typography className="textDetail" fontWeight="500" color="#212121" fontSizes={[14, 14, 16]} variant="h1" text="In the demo session, our product consultants will walk you through the conversational AI platform, analytical dashboards, and how Leena AI can help you resolve your challenges."/>
        {/* <div className="clients">
          {clients.map( client => 
            <img key={client} className={'client ' + client} alt={'client ' + client} src={`/images/clients/${client}.png`}/>
          )} 
        </div>      */}
        <div className="lower">
          <Typography fontSizes={[14, 14, 16]} variant="paragraph2" color="#0F72EE" text="Get insights about how Leena AI can help you with:"/>
          <ul>
            <li>
              <Typography fontSizes={[12, 12, 14]} variant="paragraphS2" fontWeight="300" color="#212121" text="Automatic resolution of employee queries"/>
            </li>
            <li>
              <Typography fontSizes={[12, 12, 14]} variant="paragraphS2" fontWeight="300" color="#212121" text="Streamlining HR workflows"/>
            </li>
            <li>
              <Typography fontSizes={[12, 12, 14]} variant="paragraphS2" fontWeight="300" color="#212121" text="Enhancing employee engagement"/>
            </li>
          </ul>
        </div>
      </div>
      <div className="rightContainer">
        <Form />
      </div>
    </ScheduleDemoStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);