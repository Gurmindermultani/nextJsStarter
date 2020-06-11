/**
 *
 * ContactUs
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link'

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Input from '../../../components/Input';
import { useForm, useField } from '../../../components/Input/formHooks';
import Utils from '../../../utils';

import { ContactUsStyles } from './styles';
import Dialog from './Dialog';

function ContactUs(props) {
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
        res.status === 200 ? setShowDialog('success') : '';
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
    <ContactUsStyles>
      <div className="leftContainer">
        <Typography className="demoText" variant="h1" fontSize="40px" text="We’d love to hear from you"/>
        <Typography className="middleText halfBackground" fontWeight="300" color="#212121" fontSize="20px" variant="paragraph2" text="Whether you have a question about product, features, pricing, "/>
        <br />
        <Typography className="middleText halfBackground" fontWeight="300" color="#212121" fontSize="20px" variant="paragraph2" text="live demo, or anything else, we are here to help."/>
        <br />
        <Typography className="middleText halfBackground" fontWeight="300" color="#212121" fontSize="20px" variant="paragraph2" text=""/>
        <br />
        <div className="contact">
          <div className="row">
            <img className="phoneImage" alt="phone" src="/images/icons/call.svg"/>
            <Typography fontWeight="500" color="#212121" fontSize="20px" variant="paragraph2" text="+91 8851168842"/>
          </div>
          <div className="row mail">
            <img className="phoneImage" alt="phone" src="/images/icons/communications.svg"/>
            <Typography fontWeight="500" color="#0F72EE" fontSize="20px" variant="paragraph2" text="sales@leena.ai"/>
          </div>
          <div className="row pin">
            <img className="phoneImage" alt="phone" src="/images/icons/pin.svg"/>
            <div>
              <Typography fontWeight="300" color="#212121" fontSize="20px" variant="paragraph2" text="1013 Centre Road, Suite 403-B,"/>
              <br />
              <Typography fontWeight="300" color="#212121" fontSize="20px" variant="paragraph2" text="Wilmington, New Castle,"/>
              <br />
              <Typography fontWeight="300" color="#212121" fontSize="20px" variant="paragraph2" text="Delaware, U.S. 19805"/>
            </div>
          </div>
        </div>  
        <div className="demo">
          <Typography fontWeight="600" color="#212121" fontSize="20px" variant="paragraph2" text="Want to know more about our services?"/>
          <Link href="/scheduleDemo">
            <span>
              <Typography className="anchor" fontWeight="600" color="#0F72EE" fontSize="20px" variant="paragraph2" text="Schedule demo"/>
            </span>
          </Link>
        </div>     
      </div>
      <div className="rightContainer">
        <div className="form">
          <form onSubmit={form.onSubmit}>
            <Input {...name} placeholder='Full Name' name="name"/>
            <Input {...email} placeholder='Your Work Email' name="email"/>
            <div className="phone">
              <Input {...phone} placeholder='Your Phone Number' name=" number"/>
            </div>
            <Input {...company} placeholder='Company' name="company"/>
            <Input {...jobtitle} placeholder='Job Role' name="jobRole"/>
            <Button size="large" fullWidth type="submit" name="Submit" variant="contained" />
          </form>
        </div>
      </div>
      <Dialog
        setShowDialog={setShowDialog}
        showDialog={showDialog}
      />
    </ContactUsStyles>
  );
}

ContactUs.propTypes = {};

export default memo(ContactUs);