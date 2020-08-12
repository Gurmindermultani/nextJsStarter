/**
 *
 * Form
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import SelectWithFlags from '../../../components/Select/SelectWithFlags';
import { useForm, useField } from '../../../components/Input/formHooks';
import Utils from '../../../utils';
import Codes from '../../../data/contries';

import Dialog from './Dialog';


const FormStyles = styled.div`
  width: 100%;
  padding: 0px 0px;
  margin: auto;
  border-radius: 16px;
  background: #fff;
  width: 440px;
  .halfBackground {
    z-index: 0;
    margin-bottom: 16px;
  }
  .form-group, .single-select {
    margin-top: 0;
  }
  button {
    margin-top: 10px;
  }
  .phone {
    display: flex;
    .single-select {
      min-width: 120px;
      > div {
        width: 110px;
      }
    }
    .fullWidth {
      .errorContainer {
      }
    }
  }
  @media only screen and (max-width: 760px) {
    width: 100%;
    padding: 0px;
  }
`;

function Form(props) {
  const [showDialog, setShowDialog] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState({
    code: 'IN',
    dial_code: '+91',
  });
  const phoneCountryOptions = Codes.map( code => {
    return {
      ...code,
      label: code.dial_code + ", " + code.name,
      value: code.dial_code
    }
  });
  useEffect(() => {
    let req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send(null);
    let countryName = req.getResponseHeader('cc');
    if (countryName) {
      const foundIndex = phoneCountryOptions.findIndex( elem => elem.code === countryName);
      if (foundIndex > -1) {
        setCountry(phoneCountryOptions[foundIndex]);
      }
    }
  },[]);
  const form = useForm({
    onSubmit: (formData, valid) => {
      if (!valid) return;
      let body = {...formData};
      body.phone = (country && country.dial_code ? country.dial_code : '+91') + body.phone;
      body.siteUrl = window.location.href;
      setLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leena/lead`, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then((result) => result.json())
      .then((res) => {
        setLoading(false);
        if (res.message) {
          // setShowDialog('success');
          window.open(props.pdf.href, '_blank');
          props.handleClose();
        } else {
          const message = res.errors && res.errors[0] ? res.errors[0].message : '';
          alert(message || 'Some Error Occurred!');
        }
      }).catch((e) => {
        setLoading(false);
        console.log(e);
        // alert('Some Error Occurred!');
      });
    }
  });
  const firstName = useField('firstName', form, {
    defaultValue: '',
    validations: [formData => !formData['firstName'] && 'Please enter your First name.'],
    fieldsToValidateOnChange: [],
  });
  const lastName = useField('lastName', form, {
    defaultValue: '',
    validations: [formData => !formData['lastName'] && 'Please enter your Last name.'],
    fieldsToValidateOnChange: [],
  });
  const email = useField('email', form, {
    defaultValue: '',
    validations: [
      formData => !(formData['email'] && Utils.checkValidEmail(formData['email']) ) && 'Please enter valid email.',
      formData => (Utils.checkWorkEmail(formData['email'])) && 'Please enter work email.'
    ],
    fieldsToValidateOnChange: [],
  });
  const phone = useField('phone', form, {
    defaultValue: '',
    validations: [formData => !(formData['phone'] && Utils.checkValidPhone(formData['phone']) ) && 'Enter valid number.'],
    fieldsToValidateOnChange: [],
  });
  const jobTitle = useField('jobTitle', form, {
    defaultValue: '',
    validations: [formData => !formData['jobTitle'] && 'Please enter job title.'],
    fieldsToValidateOnChange: [],
  });
  const company = useField('company', form, {
    defaultValue: '',
    validations: [formData => !formData['company'] && 'Please enter company name.'],
    fieldsToValidateOnChange: [],
  });
  const numberOfEmployees = useField('numberOfEmployees', form, {
    defaultValue: '',
    validations: [formData => !formData['numberOfEmployees'] && 'Please select number of employees.'],
    fieldsToValidateOnChange: [],
  });
  const options = [
    {
      label: '1-100',
      value: '1-100',
    },
    {
      label: '101-250',
      value: '101-250',
    },
    {
      label: '251-500',
      value: '251-500',
    },
    {
      label: '501-1000',
      value: '501-1000',
    },
    {
      label: '1000+',
      value: '1000+',
    },
  ];
  const getSelectedOption = (idx) => {
    let value = {};
    return phoneCountryOptions[idx];
  }
  const handleChange = (value) => {
    setCountry(value);
  }
  return (
    <FormStyles>
      <div className="textCenter">
        <Typography className="halfBackground" fontSizes={[24,24,24]} variant="paragraph2" text="Download case study"/>
      </div>
      <form onSubmit={form.onSubmit}>
        <Input {...firstName} placeholder='First name' name="firstName"/>
        <Input {...lastName} placeholder='Last name' name="lastName"/>
        <Input {...email} placeholder='Your work email' name="email"/>
        <div className="phone">
          <SelectWithFlags
            options={phoneCountryOptions}
            handleFieldChange={ e => handleChange(e)}
            onChange={(e) => setCountry({})}
            value={phoneCountryOptions.findIndex( elem => elem.code === country.code ) > -1 ? getSelectedOption(phoneCountryOptions.findIndex( elem => elem.code === country.code )) : ''}
          />
          <Input {...phone} className="fullWidth" placeholder='Your phone number' name="phone"/>
        </div>
        <Input {...jobTitle} placeholder='Job title' name="jobTitle"/>
        <Input {...company} placeholder='Company name' name="company"/>
        <Select
          {...numberOfEmployees}
          placeholder='Number of employees'
          options={options}
          value={numberOfEmployees.value ? options[options.findIndex( elem => elem.value === numberOfEmployees.value )] : ''}
        />
        <Button disabled={loading} loading={loading} className="dowloadCaseStudy" size="large" fullWidth type="submit" name="Download" variant="contained" />
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