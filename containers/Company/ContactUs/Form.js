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
import Codes from '../../../static/contries';

import Dialog from './Dialog';


const FormStyles = styled.div`
  width: 100%;
  padding: 40px 40px;
  margin: auto;
  margin-right: 0;
  border-radius: 16px;
  box-shadow: 0px 6px 46px #0000001F;
  background: #fff;
  max-width: 400px;
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
        > div {
          min-height: 40px;
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    max-width: none;
    padding: 48px 24px;
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
  },[]);
  const form = useForm({
    onSubmit: (formData, valid) => {
      if (!valid) return;
      let body = {...formData};
      body.phone = countryCode + body.phone;
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leena/request-demo`, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then((res) => {
        if (res.status === 200) {
          setShowDialog('success');
        } else {
          alert('Some Error Occurred!');
        }
      }).catch((e) => {
        console.log('error');
        alert('Some Error Occurred!');
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
    validations: [formData => !(formData['email'] && Utils.checkValidEmail(formData['email']) ) && 'Please enter valid email.'],
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
    </FormStyles>
  );
}

Form.propTypes = {};

export default memo(Form);