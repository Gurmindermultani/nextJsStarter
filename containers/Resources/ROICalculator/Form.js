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
import Slider from '../../../components/Slider';
import Select from '../../../components/Select';
import { useForm, useField } from '../../../components/Input/formHooks';
import Utils from '../../../utils';
import Codes from '../../../data/contries';

import Dialog from './Dialog';


const FormStyles = styled.div`
  width: 100%;
  padding: 40px 40px;
  margin: auto;
  margin-right: 0;
  box-shadow: 0px 6px 46px #0000001F;
  border-radius: 16px;
  background: #fff;
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
  .row {
    display: flex;
    margin: 32px 0 16px 0;
    .column {
      flex-basis: 50%;
      &.first {
        margin-right: 16px;
      }
      .text {
        margin-bottom: 16px;
      }
      .ratio {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .errorContainer {
          display: none;
        }
        .form-group {
          margin: 0;
        }
        .separator {
          margin: 0 16px;
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
      console.log(body);
    }
  });
  const hrTimeSpent = useField('hrTimeSpent', form, {
    defaultValue: 50,
    validations: [],
    fieldsToValidateOnChange: [],
  });
  const employeeSize = useField('employeeSize', form, {
    defaultValue: 200,
    validations: [],
    fieldsToValidateOnChange: [],
  });
  const ratio1 = useField('ratio1', form, {
    defaultValue: 1,
    validations: [],
    fieldsToValidateOnChange: [],
  });
  const ratio2 = useField('ratio2', form, {
    defaultValue: 125,
    validations: [],
    fieldsToValidateOnChange: [],
  });
  const hrTimeOptions = [
    {
      label: '25%',
      value: 25,
    },
    {
      label: '50%',
      value: 50,
    },
    {
      label: '75%',
      value: 75,
    },
  ];
  const phoneCountryOptions = Codes.map( code => {
    return {
      ...code,
      label: code.dial_code + ", " + code.name,
      value: code.dial_code
    }
  });
  const handleChange = (value) => {
    console.log(value);
  }
  return (
    <FormStyles>
      <div className="textCenter">
        <Typography className="" fontSizes={[16, 18, 18]} fontWeight="500" variant="paragraph2" text="Just a few simple questions and you’re set to go"/>
      </div>
      <form onSubmit={form.onSubmit}>
        <Slider 
          min={100} 
          max={100000} 
          label="What’s your employee size?"
          minLabel="200"
          midLabel="50,000"
          maxLabel="100,000"
          {...employeeSize}
        ></Slider>
        <div className="row">
          <div className="column first">
            <Typography className="text" variant="paragraph2" fontSizes={[14, 14, 14]} text="What percentage of time is spent by HRs on answering employee queries?"/>
            <Select
              {...hrTimeSpent}
              placeholder='Time Spent by HR'
              options={hrTimeOptions}
              value={hrTimeSpent.value ? hrTimeOptions[hrTimeOptions.findIndex( elem => elem.value === hrTimeSpent.value )] : ''}
            />
          </div>
          <div className="column">
            <Typography className="text" variant="paragraph2" fontSizes={[14, 14, 14]} text="What is the the strength of your HR team across the organization?"/>
            <div className="ratio">
              <Input {...ratio1} name="ratio1"/>
              <span className="separator">:</span>
              <Input {...ratio2} name="ratio2"/>
            </div>
          </div>
        </div>
        {/* <Select
          {...numberOfEmployees}
          placeholder='Number of employees'
          options={options}
          value={numberOfEmployees.value ? options[options.findIndex( elem => elem.value === numberOfEmployees.value )] : ''}
        /> */}
        <Button size="large" fullWidth type="submit" name="Calculate ROI" variant="contained" />
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