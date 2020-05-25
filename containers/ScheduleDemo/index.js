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
      <div className="header">
        <img className="phoneImage" alt="phone" src="/images/icons/phone.svg"/>
        <Typography fontWeight="300" color="#212121" fontSize="20px" variant="paragraph2" text="+91 8851168842"/>
        <img className="mailImage" alt="mail" src="/images/icons/mail.svg"/>
        <Typography fontWeight="300" color="#212121" fontSize="20px" variant="paragraph2" text="sales@leena.ai"/>
      </div>
      <div className="body">
        <Typography variant="h1" fontSize="40px" text="Book your live demo"/>
        <Typography className="halfBackground" fontWeight="300" color="#212121" fontSize="28px" variant="paragraph2" text="Know more how Leena AI can help you and your organization."/>
        <div className="form">
          <form onSubmit={form.onSubmit}>
            <Input {...fullName} placeholder='Full Name' name="fullName"/>
            <Input {...fullName} placeholder='Your Work Email' name="email"/>
            <div className="phone">
              <Input {...fullName} placeholder='Your Phone Number' name=" number"/>
            </div>
            <Input {...fullName} placeholder='Company' name="company"/>
            <Input {...fullName} placeholder='Job Role' name="jobRole"/>
            <Button size="large" fullWidth type="submit" name="Save" variant="contained" />
          </form>
        </div>
      </div>
      <div className="footer">
        {clients.map( client => 
          <img className={'client ' + client} alt={'client ' + client} src={`/images/clients/${client}.png`}/>
        )}
      </div>
    </ScheduleDemoStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);