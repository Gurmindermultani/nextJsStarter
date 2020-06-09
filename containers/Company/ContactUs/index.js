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
import { ContactUsStyles } from './styles';

function ContactUs(props) {
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
            <Input {...fullName} placeholder='Full Name' name="fullName"/>
            <Input {...fullName} placeholder='Your Work Email' name="email"/>
            <div className="phone">
              <Input {...fullName} placeholder='Your Phone Number' name=" number"/>
            </div>
            <Input {...fullName} placeholder='Company' name="company"/>
            <Input {...fullName} placeholder='Job Role' name="jobRole"/>
            <Button size="large" fullWidth type="submit" name="Submit" variant="contained" />
          </form>
        </div>
      </div>
    </ContactUsStyles>
  );
}

ContactUs.propTypes = {};

export default memo(ContactUs);