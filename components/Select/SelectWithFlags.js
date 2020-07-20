/**
 *
SelectComponent *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Select, { components } from 'react-select';
import Error from '../Error';
import { customStyles } from './index';

const ValueWrapper = styled.div`
  
`;

const ValueContainer = ({ children, ...props }) => {
  const { getValue, hasValue } = props;
  const nbValues = getValue();
  if (!hasValue) {
    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    );
  }
  return (
    <components.ValueContainer {...props}>
      {`${nbValues.label}`}
    </components.ValueContainer>
  );
};

const SelectWrapper = styled.div`
  min-width: 160px;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
  margin: ${props => (props.margin ? props.margin : '13px 0 0 0')};
  .errorContainer {
    min-height: 22px;
    .error {
      color: red;
      font-size: 14px;
    }
  }
  #react-select-2-input {
    height: 28px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class SelectComponent extends React.PureComponent {
  handleChange = (value, name) => {
    // validation hook
    if (this.props.onChange) {
      // const self = this;
      const e = { target: { value: value.value } };
      this.props.onChange(e);
    }
    if (this.props.handleFieldChange) {
      this.props.handleFieldChange(value, name);
    }
    if (this.props.validate) {
      setTimeout(() => this.props.validate(), 100);
    }
  };

  render() {
    const { props } = this;

    const errors = props.errors ? props.errors : [];
    const showErrors = !!errors.length;
    return (
      <SelectWrapper {...props} className={"single-select " + (props.className ? props.className : " ")}>
        <Select
          closeMenuOnSelect={!props.closeMenuOnSelect}
          styles={customStyles}
          value={props.value}
          components={{ ValueContainer }}
          isDisabled={!!props.disabled}
          maxMenuHeight={220}
          options={props.options}
          menuPlacement={props.istop ? 'top' : 'auto'}
          placeholder={props.placeholder}
          onChange={value => this.handleChange(value, props.name)}
          onBlur={() => (props.validate ? props.validate() : '')}
        />
        <div className="errorContainer">
          <Error errors={errors} showErrors={showErrors} />
        </div>
      </SelectWrapper>
    );
  }
}

SelectComponent.propTypes = {};

export default SelectComponent;
