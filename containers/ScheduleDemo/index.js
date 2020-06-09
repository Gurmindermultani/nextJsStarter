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
import { ScheduleDemoStyles } from './styles';

const clients = ['lafarge', 'oneplus', 'cocacola', 'airasia', 'concentrix', 'tata', 'rpg'];

function HomePage(props) {
  const form = useForm({
    onSubmit: (formData, valid) => {
      if (!valid) return;
      addUserApi();
    }
  });
  const fullName = useField('fullName', form, {
    defaultValue: '',
    validations: [formData => !formData['fullName'] && 'Please enter your full name.'],
    fieldsToValidateOnChange: [],
  });
  return (
    <ScheduleDemoStyles>
      <div className="leftContainer">
        <Typography className="demoText" variant="h1" fontSize="40px" text="Book your live demo"/>
        <Typography className="middleText halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="Know more how Leena AI can help you"/>
        <br />
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="and your organization."/>
        <br />
        <Typography className="textDetail" fontWeight="500" color="#212121" fontSize="20px" variant="paragraph2" text="In the demo session, our product consultants will walk you through the conversational AI platform, analytical dashboards, and how Leena AI can help you resolve your challenges."/>
        <div className="clients">
          {clients.map( client => 
            <img className={'client ' + client} alt={'client ' + client} src={`/images/clients/${client}.png`}/>
          )} 
        </div>     
      </div>
      <div className="rightContainer">
        <div className="form">
          <form onSubmit={form.onSubmit}>
            <Input {...fullName} placeholder='Full Name' name="fullName"/>
            <Input {...fullName} placeholder='Your Work Email' name="email"/>
            <div className="phone">
              <Input {...fullName} placeholder='Your Phone Number' name=" number"/>
            </div>
            <Input {...fullName} placeholder='Company' name="company"/>
            <Input {...fullName} placeholder='Job Role' name="jobRole"/>
            <Button size="large" fullWidth type="submit" name="Schedule demo" variant="contained" />
          </form>
        </div>
      </div>
    </ScheduleDemoStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);