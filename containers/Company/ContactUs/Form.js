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
import { useForm, useField } from '../../../components/Input/formHooks';
import Utils from '../../../utils';
import Codes from '../../../data/contries';

import Dialog from './Dialog';


const FormStyles = styled.div`
  width: 100%;
  background-image: url('/images/formbg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  .bgcont {
    padding: 40px 40px;
    margin-right: 0;
    box-shadow: 0px 6px 46px #0000001F;
    border-radius: 8px;
    background: #fff;
    width: 412px;
  }
  .textCenter {
    margin-bottom: 30px;
  }
  .halfBackground {
    z-index: 0;
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
      min-width: 90px;
      > div {
        width: 80px;
      }
    }
    .fullWidth {
      .errorContainer {
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 12px 0px 0 0;
    .bgcont {
      width: 100%;
      padding: 36px 12px;
      .textCenter {
        margin-bottom: 16px;
      }
    }
  }
`;

function Form(props) {
  const [showDialog, setShowDialog] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  useEffect(() => {
    let req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send(null);
    let headers = req.getAllResponseHeaders();
    let countryName = req.getResponseHeader('cc');
    if (countryName) {
      const foundIndex = phoneCountryOptions.findIndex( elem => elem.code === countryName);
      if (foundIndex > -1) {
        setCountryCode(phoneCountryOptions[foundIndex].dial_code);
      }
    }
  },[]);
  const form = useForm({
    onSubmit: (formData, valid) => {
      if (!valid) return;
      let body = {...formData};
      body.phone = countryCode + body.phone;
      body.siteUrl = window.location.href;
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leena/request-contact`, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then((result) => result.json())
      .then((res) => {
        if (res.message) {
          setShowDialog('success');
        } else {
          const message = res.errors && res.errors[0] ? res.errors[0].message : '';
          alert(message || 'Some Error Occurred!');
        }
      }).catch((e) => {
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
  const queryType = useField('queryType', form, {
    defaultValue: '',
    validations: [formData => !formData['queryType'] && 'Please select query type.'],
    fieldsToValidateOnChange: [],
  });
  const message = useField('message', form, {
    defaultValue: '',
    validations: [formData => !formData['message'] && 'Please enter your message.'],
    fieldsToValidateOnChange: [],
  });
  const options = [
    {
      label: 'Sales',
      value: 'Sales',
    },
    {
      label: 'Support',
      value: 'Support',
    },
    {
      label: 'Partnership',
      value: 'Partnership',
    },
    {
      label: 'Integration',
      value: 'Integration',
    },
    {
      label: 'Press',
      value: 'Press',
    },
    {
      label: 'Others',
      value: 'Others',
    },
  ];
  const phoneCountryOptions = Codes.map( code => {
    return {
      ...code,
      label: code.dial_code + ", " + code.name,
      value: code.dial_code
    }
  });
  return (
    <FormStyles>
      <div className="bgcont">
        <form onSubmit={form.onSubmit}>
          <Input {...firstName} placeholder='First name' name="firstName"/>
          <Input {...lastName} placeholder='Last name' name="lastName"/>
          <Input {...email} placeholder='Your work email' name="email"/>
          <div className="phone">
            <Select
              placeholder='Number of employees'
              options={phoneCountryOptions}
              onChange={ e => setCountryCode(e.target.value)}
              value={phoneCountryOptions.findIndex( elem => elem.value === countryCode ) > -1 ? { label: phoneCountryOptions[phoneCountryOptions.findIndex( elem => elem.value === countryCode )].value, value: phoneCountryOptions[phoneCountryOptions.findIndex( elem => elem.value === countryCode )].value } : ''}
            />
            <Input {...phone} className="fullWidth" placeholder='Your phone number' name="phone"/>
          </div>
          <Select
            {...queryType}
            placeholder='Type of query'
            options={options}
            value={queryType.value ? options[options.findIndex( elem => elem.value === queryType.value )] : ''}
          />
          <Input {...message} type="textArea" className="fullWidth" placeholder='Write your message...' name="message"/>
          <Button size="large" fullWidth type="submit" name="Submit" variant="contained" />
        </form>
        <Dialog
          setShowDialog={setShowDialog}
          showDialog={showDialog}
        />
      </div>
    </FormStyles>
  );
}

Form.propTypes = {};

export default memo(Form);