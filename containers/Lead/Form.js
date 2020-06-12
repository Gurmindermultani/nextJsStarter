/**
 *
 * Form
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../components/Button';
import Typography from '../../components/Typography';
import Input from '../../components/Input';
import { useForm, useField } from '../../components/Input/formHooks';
import Utils from '../../utils';

import Dialog from './Dialog';


const FormStyles = styled.div`
  width: 100%;
  padding: 40px 50px;
  margin: auto;
  box-shadow: 0px 6px 46px #0000001F;
  border-radius: 16px;
  background: #fff;
  max-width: 400px;
  .halfBackground {
    z-index: 0;
    margin-bottom: 20px;
  }
  .form-group {
    margin-top: 0;
  }
  button {
    margin-top: 20px;
  }
  @media only screen and (max-width: 760px) {
    max-width: none;
    padding: 48px 24px;
  }
`;

function Form(props) {
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
    validations: [formData => !formData['jobtitle'] && 'Please enter job title.'],
    fieldsToValidateOnChange: [],
  });
  return (
    <FormStyles>
      <div className="textCenter">
        <Typography className="halfBackground" fontSizes={[24,24,24]} variant="paragraph2" text="Get the full case study"/>
      </div>
      <form onSubmit={form.onSubmit}>
        <Input {...name} placeholder='Full Name' name="fullName"/>
        <Input {...email} placeholder='Your Work Email' name="email"/>
        <div className="phone">
          <Input {...phone} placeholder='Your Phone Number' name=" number"/>
        </div>
        <Input {...company} placeholder='Company Name' name="company"/>
        <Input {...jobtitle} placeholder='Job Title' name="jobtitle"/>
        <Button size="large" fullWidth type="submit" name="Schedule demo" variant="contained" />
      </form>
      <Dialog
        setShowDialog={setShowDialog}
        showDialog={showDialog}
      />
    </FormStyles>
  );
}

Form.propTypes = {};

export default memo(Form);