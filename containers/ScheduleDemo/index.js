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
import Dialog from './Dialog';

const clients = ['lafarge', 'oneplus', 'cocacola', 'airasia', 'concentrix', 'tata', 'rpg'];

function HomePage(props) {
  const [showDialog, setShowDialog] = useState('');
  const form = useForm({
    onSubmit: (formData, valid) => {
      if (!valid) return;
      fetch('https://staging.chatteron.io/api/leena/contact-us', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res) => {
        res.status === 200 ? setShowDialog('success') : ''
      });
    }
  });
  const name = useField('name', form, {
    defaultValue: '',
    validations: [formData => !formData['name'] && 'Please enter your full name.'],
    fieldsToValidateOnChange: [],
  });
  const email = useField('email', form, {
    defaultValue: '',
    validations: [formData => !(formData['email'] && Utils.checkValidEmail(formData['email']) ) && 'Please enter valid email.'],
    fieldsToValidateOnChange: [],
  });
  const phone = useField('phone', form, {
    defaultValue: '',
    validations: [formData => !formData['phone'] && 'Please enter your phone number.'],
    fieldsToValidateOnChange: [],
  });
  const company = useField('company', form, {
    defaultValue: '',
    validations: [formData => !formData['company'] && 'Please enter company name.'],
    fieldsToValidateOnChange: [],
  });
  const jobtitle = useField('jobtitle', form, {
    defaultValue: '',
    validations: [formData => !formData['jobtitle'] && 'Please enter job role.'],
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
            <img key={client} className={'client ' + client} alt={'client ' + client} src={`/images/clients/${client}.png`}/>
          )} 
        </div>     
      </div>
      <div className="rightContainer">
        <div className="form">
          <form onSubmit={form.onSubmit}>
            <Input {...name} placeholder='Full Name' name="fullName"/>
            <Input {...email} placeholder='Your Work Email' name="email"/>
            <div className="phone">
              <Input {...phone} placeholder='Your Phone Number' name=" number"/>
            </div>
            <Input {...company} placeholder='Company' name="company"/>
            <Input {...jobtitle} placeholder='Job Role' name="jobRole"/>
            <Button size="large" fullWidth type="submit" name="Schedule demo" variant="contained" />
          </form>
        </div>
      </div>
      <Dialog
        setShowDialog={setShowDialog}
        showDialog={showDialog}
      />
    </ScheduleDemoStyles>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);